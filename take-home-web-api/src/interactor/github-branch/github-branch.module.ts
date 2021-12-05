import { Module } from '@nestjs/common';
import { GetGithubBranchesModule } from './get-github-branches';

@Module({
  imports: [GetGithubBranchesModule],
  exports: [GetGithubBranchesModule],
})
export class GithubBranchModule {}
