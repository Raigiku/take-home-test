import { Global, Module } from '@nestjs/common';
import { GithubCommitController } from './github-commit';

@Global()
@Module({
  controllers: [GithubCommitController],
})
export class PresentationModule {}
