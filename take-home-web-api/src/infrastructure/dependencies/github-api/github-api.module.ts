import { Module } from '@nestjs/common';
import { GithubBranchApiRepository, GithubCommitApiRepository } from '.';

@Module({
  providers: [GithubCommitApiRepository, GithubBranchApiRepository],
  exports: [GithubCommitApiRepository, GithubBranchApiRepository],
})
export class GithubApiModule {}
