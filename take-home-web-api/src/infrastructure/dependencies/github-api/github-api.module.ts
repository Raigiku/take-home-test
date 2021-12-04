import { Module } from '@nestjs/common';
import { GithubCommitApiRepository } from '.';

@Module({
  providers: [GithubCommitApiRepository],
  exports: [GithubCommitApiRepository],
})
export class GithubApiModule {}
