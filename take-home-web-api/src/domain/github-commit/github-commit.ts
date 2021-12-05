import { githubUrl } from '../core/constants';

export class GithubCommit {
  constructor(
    readonly message: string,
    readonly hash: string,
    readonly creationDate: Date,
    readonly author: GithubCommitAccount,
    readonly htmlUrl: string,
    repositoryOwnerName: string,
    repositoryName: string,
  ) {
    this.repositoryAtThisPointHtmlUrl = `${githubUrl}/${repositoryOwnerName}/${repositoryName}/tree/${hash}`;
  }

  readonly repositoryAtThisPointHtmlUrl: string;
}

export class GithubCommitAccount {
  constructor(
    readonly name: string,
    readonly pictureUrl: string,
    readonly profileHtmlUrl: string,
    repositoryOwnerName: string,
    repositoryName: string,
  ) {
    this.commitsHtmlUrl = `${githubUrl}/${repositoryOwnerName}/${repositoryName}/commits?author=${name}`;
  }

  readonly commitsHtmlUrl: string;
}
