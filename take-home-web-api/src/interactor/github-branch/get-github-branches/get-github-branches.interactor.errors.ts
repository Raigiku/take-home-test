import { InteractorError } from '../../../domain/core';

export class GetGithubBranchesInteractorErrors extends InteractorError {
  readonly accountName: string[] = [];
  readonly repositoryName: string[] = [];
}
