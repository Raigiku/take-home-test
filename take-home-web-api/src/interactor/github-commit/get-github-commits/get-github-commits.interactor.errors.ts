import { InteractorError } from '../../../domain/core';

export class GetGithubCommitsInteractorErrors extends InteractorError {
  readonly accountName: string[] = [];
  readonly repositoryName: string[] = [];
  readonly branchName: string[] = [];
  readonly page: string[] = [];
  readonly elementsPerPage: string[] = [];
}
