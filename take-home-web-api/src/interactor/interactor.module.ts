import { Global, Module } from '@nestjs/common';
import { GithubCommitModule } from './github-commit/github-commit.module';

@Global()
@Module({
  imports: [GithubCommitModule],
  exports: [GithubCommitModule],
})
export class InteractorModule {}
