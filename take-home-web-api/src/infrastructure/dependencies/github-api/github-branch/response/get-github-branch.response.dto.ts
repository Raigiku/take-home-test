export interface Commit {
  sha: string;
  url: string;
}

export interface GetGithubBranchResponseDto {
  name: string;
  commit: Commit;
  protected: boolean;
}
