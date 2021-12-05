import { ValidationException } from '../../../domain/core';
import { GithubAccountName } from '../../../domain/github-account';
import { GithubRepositoryName } from '../../../domain/github-repository';
import { GetGithubBranchesInteractorErrors } from './get-github-branches.interactor.errors';

export class GetGithubBranchesInteractorInput {
  private constructor(
    readonly accountName: string,
    readonly repositoryName: string,
  ) {}

  static parse(
    accountName: string,
    repositoryName: string,
  ): GetGithubBranchesInteractorInput {
    const errors = new GetGithubBranchesInteractorErrors();

    GithubAccountName.validate(accountName, errors.accountName);
    GithubRepositoryName.validate(repositoryName, errors.repositoryName);

    if (errors.hasErrors) throw new ValidationException(errors);

    return new GetGithubBranchesInteractorInput(accountName, repositoryName);
  }
}
