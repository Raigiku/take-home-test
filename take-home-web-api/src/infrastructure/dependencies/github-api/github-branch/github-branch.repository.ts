import axios from 'axios';
import { GetGithubBranchResponseDto } from '.';
import { githubApiUrl } from '../../constants';

export class GithubBranchApiRepository {
  async getBranches(
    accountName: string,
    repositoryName: string,
  ): Promise<GetGithubBranchResponseDto[]> {
    const url = `${githubApiUrl}/repos/${accountName}/${repositoryName}/branches`;
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
