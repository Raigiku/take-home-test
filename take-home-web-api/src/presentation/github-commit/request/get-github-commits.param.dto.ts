import { ApiProperty } from '@nestjs/swagger';

export class GetGithubCommitsParamDto {
  @ApiProperty()
  accountName!: string;

  @ApiProperty()
  repositoryName!: string;

  @ApiProperty()
  branchName!: string;
}
