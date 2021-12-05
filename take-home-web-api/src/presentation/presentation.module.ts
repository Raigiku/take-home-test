import { Global, Module } from '@nestjs/common';
import { GithubBranchController } from './github-branch';
import { GithubCommitController } from './github-commit';

@Global()
@Module({
  controllers: [GithubCommitController, GithubBranchController],
})
export class PresentationModule {}
