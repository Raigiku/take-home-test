import { Module } from '@nestjs/common';
import { GetGithubCommitsInteractor } from '.';

@Module({
  providers: [GetGithubCommitsInteractor],
  exports: [GetGithubCommitsInteractor],
})
export class GetGithubCommitsModule {}
