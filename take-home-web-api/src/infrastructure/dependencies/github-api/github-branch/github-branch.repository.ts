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
      const headers: any = {
        'Content-Type': 'application/json',
      };
      if (
        process.env.TKTR_GITHUB_USERNAME !== undefined &&
        process.env.TKTR_GITHUB_TOKEN !== undefined
      ) {
        headers.Authorization = Buffer.from(
          process.env.TKTR_GITHUB_USERNAME +
            ':' +
            process.env.TKTR_GITHUB_TOKEN,
        ).toString('base64');
      }
      const response = await axios.get(url, { headers });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 404) return [];
      }
      throw error;
    }
  }
}
