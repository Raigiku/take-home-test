import { Module } from '@nestjs/common';
import { GetGithubBranchesInteractor } from '.';

@Module({
  providers: [GetGithubBranchesInteractor],
  exports: [GetGithubBranchesInteractor],
})
export class GetGithubBranchesModule {}
