import { Module } from '@nestjs/common';
import { GetGithubCommitsModule } from './get-github-commits/get-github-commits.module';

@Module({
  imports: [GetGithubCommitsModule],
  exports: [GetGithubCommitsModule],
})
export class GithubCommitModule {}
