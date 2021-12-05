import { WebApiGetGithubCommitsResponse } from './response/web-api-get-github-commits.response';

export class WebApiGithubCommitService {
  static async getCommits(
    account: string,
    repository: string,
    branch: string,
    page: number,
    elementsPerPage: number,
  ): Promise<WebApiGetGithubCommitsResponse[]> {
    let queryString = new URLSearchParams({
      branchName: branch,
      page: page.toString(),
      elementsPerPage: elementsPerPage.toString(),
    }).toString();
    const response = await fetch(
      `${process.env.REACT_APP_TKTR_API_URL}/accounts/${account}/repositories/${repository}/commits?${queryString}`,
      {
        method: 'GET',
        headers: { accept: 'application/json' },
      },
    );
    if (response.ok) {
      return (await response.json()) as WebApiGetGithubCommitsResponse[];
    } else {
      throw new Error();
    }
  }
}
