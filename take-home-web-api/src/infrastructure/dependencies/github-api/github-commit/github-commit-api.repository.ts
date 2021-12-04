import axios from 'axios';
import { GetGithubCommitResponseDto } from '.';
import { githubApiUrl } from '../../constants';

export class GithubCommitApiRepository {
  async getCommits(
    accountName: string,
    repositoryName: string,
    branchName: string,
    page: number,
    elementsPerPage: number,
  ): Promise<GetGithubCommitResponseDto[]> {
    const url = `${githubApiUrl}/repos/${accountName}/${repositoryName}/commits?sha=${branchName}&page=${page}&per_page=${elementsPerPage}`;
    try {
      const response = await axios.get(url, {
        headers: { 'Content-Type': 'application/json' },
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 404) return [];
      }
      throw error;
    }
  }
}
