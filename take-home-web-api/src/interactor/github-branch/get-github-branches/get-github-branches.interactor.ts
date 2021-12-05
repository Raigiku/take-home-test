import { Inject, Injectable } from '@nestjs/common';
import {
  GetGithubBranchesInteractorInfra,
  GetGithubBranchesInteractorInput,
  GetGithubBranchesInteractorOutput,
} from '.';

@Injectable()
export class GetGithubBranchesInteractor {
  constructor(
    @Inject('GetGithubBranchesInteractorInfra')
    private readonly infra: GetGithubBranchesInteractorInfra,
  ) {}

  async execute(
    input: GetGithubBranchesInteractorInput,
  ): Promise<GetGithubBranchesInteractorOutput[]> {
    const branches = this.infra.getBranches(
      input.accountName,
      input.repositoryName,
    );
    return branches;
  }
}
