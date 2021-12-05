import { GithubBranch } from '../../../domain/github-branch';

export abstract class GetGithubBranchesInteractorInfra {
  abstract getBranches(
    accountName: string,
    repositoryName: string,
  ): Promise<GithubBranch[]>;
}
