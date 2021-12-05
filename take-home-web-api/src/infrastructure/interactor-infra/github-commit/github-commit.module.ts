import { Module } from '@nestjs/common';
import { GetGithubCommitsInteractorInfraImpl } from '.';

@Module({
  providers: [
    {
      provide: 'GetGithubCommitsInteractorInfra',
      useClass: GetGithubCommitsInteractorInfraImpl,
    },
  ],
  exports: ['GetGithubCommitsInteractorInfra'],
})
export class GithubCommitModule {}
