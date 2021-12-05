import { Module } from '@nestjs/common';
import { GetGithubBranchesInteractorInfraImpl } from '.';

@Module({
  providers: [
    {
      provide: 'GetGithubBranchesInteractorInfra',
      useClass: GetGithubBranchesInteractorInfraImpl,
    },
  ],
  exports: ['GetGithubBranchesInteractorInfra'],
})
export class GithubBranchModule {}
