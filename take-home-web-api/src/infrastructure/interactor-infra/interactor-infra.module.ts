import { Module } from '@nestjs/common';
import { GithubCommitModule } from './github-commit/github-commit.module';

@Module({
  imports: [GithubCommitModule],
  exports: [GithubCommitModule],
})
export class InteractorInfraModule {}
