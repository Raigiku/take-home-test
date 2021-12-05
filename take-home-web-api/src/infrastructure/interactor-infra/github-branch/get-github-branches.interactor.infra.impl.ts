import { Injectable } from '@nestjs/common';
import { GithubBranch } from '../../../domain/github-branch';
import { GithubBranchApiRepository } from '../../dependencies/github-api';
import { GetGithubBranchesInteractorInfra } from '../../../interactor/github-branch';

@Injectable()
export class GetGithubBranchesInteractorInfraImpl
  implements GetGithubBranchesInteractorInfra
{
  constructor(
    private readonly githubBranchApiRepository: GithubBranchApiRepository,
  ) {}

  async getBranches(
    accountName: string,
    repositoryName: string,
  ): Promise<GithubBranch[]> {
    const apiBranches = await this.githubBranchApiRepository.getBranches(
      accountName,
      repositoryName,
    );
    return apiBranches.map((ab) => new GithubBranch(ab.name));
  }
}
