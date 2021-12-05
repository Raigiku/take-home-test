export interface WebApiGetGithubCommitsResponse {
  message: string;
  hash: string;
  creationDate: string;
  author: {
    name: string;
    pictureUrl: string;
    commitsHtmlUrl: string;
    profileHtmlUrl: string;
  };
  htmlUrl: string;
  repositoryAtThisPointHtmlUrl: string;
}
