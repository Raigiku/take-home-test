import { GithubCommit, HomePageState } from './home-page.state';

export type HomePageAction =
  | { type: 'form_changed'; field: string; newValue: any }
  | { type: 'started_search' }
  | { type: 'branch_selected'; newValue: any }
  | { type: 'branches_loaded'; branches: string[] }
  | { type: 'commits_loaded'; commits: GithubCommit[] }
  | { type: 'page_changed'; newPage: number }
  | { type: 'loading_commits' }
  | {
      type: 'received_validation_error';
      errors: {
        accountName: string[];
        repositoryName: string[];
      };
    };

export const homePageReducer = (
  state: HomePageState,
  action: HomePageAction,
): HomePageState => {
  switch (action.type) {
    case 'form_changed':
      return { ...state, [action.field]: action.newValue };
    case 'branch_selected':
      return {
        ...state,
        selectedBranch: action.newValue,
      };
    case 'loading_commits':
      return { ...state, isLoadingCommits: true };
    case 'page_changed':
      return { ...state, page: action.newPage };
    case 'started_search':
      return {
        ...state,
        isLoadingBranches: true,
        searchedAccountName: state.formAccountName,
        searchedRepositoryName: state.formRepositoryName,
        page: 1,
      };
    case 'branches_loaded':
      return {
        ...state,
        isLoadingBranches: false,
        branches: action.branches,
        selectedBranch: action.branches[0],
        errorFields: {
          ...state.errorFields,
          errors: { accountName: [], repositoryName: [] },
        },
      };
    case 'commits_loaded':
      return {
        ...state,
        isLoadingCommits: false,
        commits: action.commits,
        errorFields: {
          ...state.errorFields,
          errors: { accountName: [], repositoryName: [] },
        },
      };
    case 'received_validation_error':
      return {
        ...state,
        errorFields: { ...state.errorFields, errors: action.errors },
        isLoadingBranches: false,
        isLoadingCommits: false,
      };
    default:
      return state;
  }
};
