import {
  WebApiGetGithubBranchesErrorResponse,
  WebApiGetGithubBranchesResponse,
} from './response/web-api-get-github-branches.response';

export class WebApiGithubBranchService {
  static async getBranches(
    account: string,
    repository: string,
  ): Promise<
    WebApiGetGithubBranchesResponse[] | WebApiGetGithubBranchesErrorResponse
  > {
    const response = await fetch(
      `http://localhost:3001/accounts/${account}/repositories/${repository}/branches`,
      {
        method: 'GET',
        headers: { accept: 'application/json' },
      },
    );
    if (response.ok) {
      return (await response.json()) as WebApiGetGithubBranchesResponse[];
    } else if (response.status === 400) {
      return (await response.json()) as WebApiGetGithubBranchesErrorResponse;
    } else {
      throw new Error();
    }
  }
}
