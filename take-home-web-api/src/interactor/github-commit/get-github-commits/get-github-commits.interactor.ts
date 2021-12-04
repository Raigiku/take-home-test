import { Inject, Injectable } from '@nestjs/common';
import {
  GetGithubCommitsInteractorInput,
  GetGithubCommitsInteractorInfra,
  GetGithubCommitsInteractorOutput,
} from '.';

@Injectable()
export class GetGithubCommitsInteractor {
  constructor(
    @Inject('GetGithubCommitsInteractorInfra')
    private readonly infra: GetGithubCommitsInteractorInfra,
  ) {}

  async execute(
    input: GetGithubCommitsInteractorInput,
  ): Promise<GetGithubCommitsInteractorOutput[]> {
    const githubCommits = await this.infra.getCommits(
      input.accountName,
      input.repositoryName,
      input.branchName,
      input.page,
      input.elementsPerPage,
    );
    return githubCommits;
  }
}
