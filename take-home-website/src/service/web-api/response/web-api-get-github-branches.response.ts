export interface WebApiGetGithubBranchesResponse {
  name: string;
}

export interface WebApiGetGithubBranchesErrorResponse {
  errors: {
    accountName: string[];
    repositoryName: string[];
  };
}
