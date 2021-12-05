import { GetGithubCommitsInteractorInfra } from '../../../interactor/github-commit';
import {
  GithubCommit,
  GithubCommitAccount,
} from '../../../domain/github-commit';
import { GithubCommitApiRepository } from '../../dependencies/github-api';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetGithubCommitsInteractorInfraImpl
  implements GetGithubCommitsInteractorInfra
{
  constructor(
    private readonly githubCommitApiRepository: GithubCommitApiRepository,
  ) {}

  async getCommits(
    accountName: string,
    repositoryName: string,
    branchName: string,
    page: number,
    elementsPerPage: number,
  ): Promise<GithubCommit[]> {
    const apiCommits = await this.githubCommitApiRepository.getCommits(
      accountName,
      repositoryName,
      branchName,
      page,
      elementsPerPage,
    );
    return apiCommits.map((ac) => {
      if (ac.author == null) console.dir(ac);
      return new GithubCommit(
        ac.commit.message,
        ac.sha,
        new Date(ac.commit.author.date),
        ac.author === undefined
          ? new GithubCommitAccount(
              ac.commit.author.name,
              ac.committer.avatar_url,
              '',
              accountName,
              repositoryName,
            )
          : new GithubCommitAccount(
              ac.author.login,
              ac.author.avatar_url,
              ac.author.html_url,
              accountName,
              repositoryName,
            ),
        ac.html_url,
      );
    });
  }
}
