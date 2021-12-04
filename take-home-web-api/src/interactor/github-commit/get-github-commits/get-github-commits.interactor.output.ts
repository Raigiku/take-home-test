export class GetGithubCommitsInteractorOutput {
  private constructor(
    readonly message: string,
    readonly hash: string,
    readonly creationDate: Date,
    readonly author: GetGithubCommitsInteractorOutputAccount,
    readonly htmlUrl: string,
  ) {}
}

export class GetGithubCommitsInteractorOutputAccount {
  constructor(
    readonly name: string,
    readonly pictureUrl: string,
    readonly commitsHtmlUrl: string,
    readonly profileHtmlUrl: string,
  ) {}
}
