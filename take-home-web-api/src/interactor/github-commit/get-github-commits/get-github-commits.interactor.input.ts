import { GithubAccountName } from '../../../domain/github-account';
import { GithubRepositoryName } from '../../../domain/github-repository';
import { GithubBranchName } from '../../../domain/github-branch';
import { PositiveInt } from '../../../domain/primitive';
import { ValidationException } from '../../../domain/core';
import { GetGithubCommitsInteractorErrors } from './get-github-commits.interactor.errors';

export class GetGithubCommitsInteractorInput {
  private constructor(
    readonly accountName: string,
    readonly repositoryName: string,
    readonly branchName: string,
    readonly page: number,
    readonly elementsPerPage: number,
  ) {}

  static parse(
    accountName: string,
    repositoryName: string,
    branchName: string,
    page: number,
    elementsPerPage: number,
  ): GetGithubCommitsInteractorInput {
    const errors = new GetGithubCommitsInteractorErrors();

    GithubAccountName.validate(accountName, errors.accountName);
    GithubRepositoryName.validate(repositoryName, errors.repositoryName);
    GithubBranchName.validate(branchName, errors.branchName);
    PositiveInt.validate(page, errors.page);
    PositiveInt.validate(elementsPerPage, errors.elementsPerPage);

    if (errors.hasErrors) throw new ValidationException(errors);

    return new GetGithubCommitsInteractorInput(
      accountName,
      repositoryName,
      branchName,
      page,
      elementsPerPage,
    );
  }
}
