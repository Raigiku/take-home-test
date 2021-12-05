import { Global, Module } from '@nestjs/common';
import { GithubBranchModule } from './github-branch/github-branch.module';
import { GithubCommitModule } from './github-commit/github-commit.module';

@Global()
@Module({
  imports: [GithubCommitModule, GithubBranchModule],
  exports: [GithubCommitModule, GithubBranchModule],
})
export class InteractorModule {}
