import React, { useEffect, useReducer } from 'react';
import { CircularProgress, Grid, Pagination } from '@mui/material';
import HomeTitle from '../../component/HomeTitle';
import SearchBar from '../../component/SearchBar';
import { WebApiGithubBranchService } from '../../service/web-api/web-api-github-branch.service';
import { homePageReducer } from './home-page.reducer';
import { homePageInitialState } from './home-page.state';
import GithubCommits from '../../component/GithubCommits';
import BranchSelector from '../../component/BranchSelector';
import { WebApiGithubCommitService } from '../../service/web-api/web-api-github-commit.service';
import { GithubCommit } from './home-page.state';

const HomePage = () => {
  const [state, dispatch] = useReducer(homePageReducer, homePageInitialState);

  const onChangeTextField = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'form_changed',
      field: e.target.name,
      newValue: e.target.value,
    });
  };

  const onSelectBranch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'branch_selected', newValue: e.target.value });
  };

  const onClickSearch = async () => {
    dispatch({ type: 'started_search' });
  };

  // load branches
  useEffect(() => {
    if (!state.isLoadingBranches) return;
    try {
      loadBranches(state.searchedAccountName, state.searchedRepositoryName);
    } catch (error) {
      console.error(error);
    }
  }, [
    state.searchedAccountName,
    state.searchedRepositoryName,
    state.isLoadingBranches,
  ]);

  const loadBranches = async (accountName: string, repositoryName: string) => {
    const response = await WebApiGithubBranchService.getBranches(
      accountName,
      repositoryName,
    );
    if (!(response instanceof Array)) {
      dispatch({
        type: 'received_validation_error',
        errors: response.errors,
      });
      return;
    }
    dispatch({
      type: 'branches_loaded',
      branches: response.map((b) => b.name),
    });
  };

  // load commits
  useEffect(() => {
    // page changes
    // branch changes
    const anyErrors =
      state.errorFields.errors.accountName.length > 0 ||
      state.errorFields.errors.repositoryName.length > 0;
    if (
      state.isLoadingBranches === undefined ||
      state.isLoadingBranches ||
      anyErrors
    )
      return;
    try {
      loadCommits(
        state.searchedAccountName,
        state.searchedRepositoryName,
        state.selectedBranch,
        state.page,
      );
    } catch (error) {
      console.error(error);
    }
  }, [
    state.searchedAccountName,
    state.searchedRepositoryName,
    state.selectedBranch,
    state.page,
    state.isLoadingBranches,
    state.errorFields.errors.accountName.length,
    state.errorFields.errors.repositoryName.length,
  ]);

  const loadCommits = async (
    accountName: string,
    repositoryName: string,
    selectedBranch: string,
    page: number,
  ) => {
    const response = await WebApiGithubCommitService.getCommits(
      accountName,
      repositoryName,
      selectedBranch,
      page,
      20,
    );
    dispatch({
      type: 'commits_loaded',
      commits: response.map(
        (re) =>
          ({ ...re, creationDate: new Date(re.creationDate) } as GithubCommit),
      ),
    });
  };

  const onPageChanged = (
    event: React.ChangeEvent<unknown>,
    newPage: number,
  ) => {
    dispatch({
      type: 'page_changed',
      newPage,
    });
  };

  return (
    <Grid container padding={2} gap={2}>
      <HomeTitle />
      <Grid container item paddingX='10vw' rowGap={2}>
        <SearchBar
          accountName={state.formAccountName}
          repositoryName={state.formRepositoryName}
          errorFields={state.errorFields}
          onChangeTextField={onChangeTextField}
          onClickSearch={onClickSearch}
        />

        {state.isLoadingBranches ? (
          <Grid item xs={12} textAlign='center'>
            <CircularProgress />
          </Grid>
        ) : (
          <React.Fragment>
            {state.branches.length > 0 && (
              <React.Fragment>
                <Grid item xs={12}>
                  <BranchSelector
                    branches={state.branches}
                    selectedBranch={state.selectedBranch}
                    onChangeTextField={onSelectBranch}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Pagination
                    count={state.page + 8}
                    page={state.page}
                    onChange={onPageChanged}
                  />
                </Grid>
              </React.Fragment>
            )}
            {state.isLoadingCommits ? (
              <Grid item xs={12} textAlign='center'>
                <CircularProgress />
              </Grid>
            ) : (
              <GithubCommits
                commits={state.commits}
                isLoadingCommits={state.isLoadingCommits}
              />
            )}
          </React.Fragment>
        )}
      </Grid>
    </Grid>
  );
};

export default HomePage;
