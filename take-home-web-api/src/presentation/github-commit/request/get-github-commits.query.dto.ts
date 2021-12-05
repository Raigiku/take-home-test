import { ApiProperty } from '@nestjs/swagger';

export class GetGithubCommitsQueryDto {
  @ApiProperty()
  branchName!: string;
}
