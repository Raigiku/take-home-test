import { ApiProperty } from '@nestjs/swagger';

export class GetGithubCommitsAccountResponseDto {
  @ApiProperty()
  readonly name!: string;

  @ApiProperty()
  readonly pictureUrl!: string;

  @ApiProperty()
  readonly commitsHtmlUrl!: string;

  @ApiProperty()
  readonly profileHtmlUrl!: string;
}

export class GetGithubCommitsResponseDto {
  @ApiProperty()
  readonly message!: string;

  @ApiProperty()
  readonly hash!: string;

  @ApiProperty()
  readonly creationDate!: Date;

  @ApiProperty()
  readonly author!: GetGithubCommitsAccountResponseDto;

  @ApiProperty()
  readonly htmlUrl!: string;
}
