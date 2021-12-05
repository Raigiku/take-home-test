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
  // Array(20).fill({
  //   author: {
  //     name: 'Raigiku',
  //     commitsHtmlUrl:
  //       'https://github.com/Raigiku/take-home-test/commits?author=Raigiku',
  //     pictureUrl: 'https://avatars.githubusercontent.com/u/31873735?v=4',
  //     profileHtmlUrl: 'https://github.com/Raigiku',
  //   },
  //   hash: 'fc4c726bfc0cca9ee32c3eaa33368e1588815d57',
  //   message: 'Add null check for comitter in github api',
  //   creationDate: new Date('2021-12-05T09:40:18Z'),
  //   htmlUrl:
  //     'https://github.com/Raigiku/take-home-test/commit/fc4c726bfc0cca9ee32c3eaa33368e1588815d57',
  // }),
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
