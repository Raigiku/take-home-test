import { ApiProperty } from '@nestjs/swagger';

export class GetGithubBranchesParamDto {
  @ApiProperty()
  accountName!: string;

  @ApiProperty()
  repositoryName!: string;
}
