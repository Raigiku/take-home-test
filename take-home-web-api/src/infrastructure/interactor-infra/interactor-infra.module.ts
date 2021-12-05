import { Module } from '@nestjs/common';
import { GithubBranchModule, GithubCommitModule } from '.';

@Module({
  imports: [GithubCommitModule, GithubBranchModule],
  exports: [GithubCommitModule, GithubBranchModule],
})
export class InteractorInfraModule {}
