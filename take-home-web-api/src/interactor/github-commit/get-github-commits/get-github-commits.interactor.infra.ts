import { GithubCommit } from '../../../domain/github-commit';

export abstract class GetGithubCommitsInteractorInfra {
  abstract getCommits(
    accountName: string,
    repositoryName: string,
    branchName: string,
    page: number,
    elementsPerPage: number,
  ): Promise<GithubCommit[]>;
}
