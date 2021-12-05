import { ApiProperty } from '@nestjs/swagger';
import { GetGithubBranchesInteractorErrors } from '../../../interactor/github-branch';

export class GetGithubBranchesErrorsDto extends GetGithubBranchesInteractorErrors {
  @ApiProperty()
  accountName!: string[];

  @ApiProperty()
  repositoryName!: string[];
}
