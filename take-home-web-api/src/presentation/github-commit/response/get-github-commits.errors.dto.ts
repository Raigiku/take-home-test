import { ApiProperty } from '@nestjs/swagger';
import { GetGithubCommitsInteractorErrors } from '../../../interactor/github-commit';

export class GetGithubCommitsErrorsDto extends GetGithubCommitsInteractorErrors {
  @ApiProperty()
  accountName!: string[];

  @ApiProperty()
  repositoryName!: string[];

  @ApiProperty()
  branchName!: string[];

  @ApiProperty()
  page!: string[];

  @ApiProperty()
  elementsPerPage!: string[];
}
