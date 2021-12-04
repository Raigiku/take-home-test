import { Global, Module } from '@nestjs/common';
import { GetGithubCommitsInteractorInfraImpl } from '.';

@Global()
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
