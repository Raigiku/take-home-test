import { ApiProperty } from '@nestjs/swagger';

export class GetGithubBranchesResponseDto {
  @ApiProperty()
  name!: string;
}
