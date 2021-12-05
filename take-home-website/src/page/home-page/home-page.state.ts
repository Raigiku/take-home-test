export type HomePageState = {
  formAccountName: string;
  formRepositoryName: string;
  selectedBranch: string;
  branches: string[];
  commits: GithubCommit[];
  searchedAccountName: string;
  searchedRepositoryName: string;
  page: number;
  isLoadingBranches?: boolean;
  isLoadingCommits?: boolean;
  errorFields: HomePageErrorFields;
};

export type GithubCommit = {
  message: string;
  hash: string;
  creationDate: Date;
  author: {
    name: string;
    pictureUrl: string;
    commitsHtmlUrl: string;
    profileHtmlUrl: string;
  };
  htmlUrl: string;
  repositoryAtThisPointHtmlUrl: string;
};

export type HomePageErrorFields = {
  errors: {
    accountName: string[];
    repositoryName: string[];
  };
  fieldText: {
    accountName: 'The account ';
    repositoryName: 'The repository ';
  };
};

export const homePageInitialState: HomePageState = {
  formAccountName: 'Raigiku',
  formRepositoryName: 'take-home-test',
  selectedBranch: '',
  searchedAccountName: '',
  searchedRepositoryName: '',
  branches: [],
  commits: [],
  page: 1,
  isLoadingBranches: undefined,
  isLoadingCommits: undefined,
  errorFields: {
    errors: { accountName: [], repositoryName: [] },
    fieldText: {
      accountName: 'The account ',
      repositoryName: 'The repository ',
    },
  },
};
