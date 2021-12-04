import { Global, Module } from '@nestjs/common';
import { DependenciesModule } from './dependencies/dependencies.module';
import { InteractorInfraModule } from './interactor-infra/interactor-infra.module';

@Global()
@Module({
  imports: [InteractorInfraModule, DependenciesModule],
  exports: [InteractorInfraModule, DependenciesModule],
})
export class InfrastructureModule {}
