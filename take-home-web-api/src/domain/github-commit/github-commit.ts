import { githubUrl } from '../core/constants';

export class GithubCommit {
  constructor(
    readonly message: string,
    readonly hash: string,
    readonly creationDate: Date,
    readonly author: GithubCommitAccount,
    repositoryOwnerName: string,
    repositoryName: string,
  ) {
    this.htmlUrl = `${githubUrl}/${repositoryOwnerName}/${repositoryName}/commit/${hash}`;
  }

  readonly htmlUrl: string;
}

export class GithubCommitAccount {
  constructor(
    readonly name: string,
    readonly pictureUrl: string,
    repositoryOwnerName: string,
    repositoryName: string,
  ) {
    this.commitsHtmlUrl = `${githubUrl}/${repositoryOwnerName}/${repositoryName}/commits?author=${name}`;
    this.profileHtmlUrl = `${githubUrl}/${name}`;
  }

  readonly commitsHtmlUrl: string;
  readonly profileHtmlUrl: string;
}
