import { Module } from '@nestjs/common';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { InteractorModule } from './interactor/interactor.module';
import { PresentationModule } from './presentation/presentation.module';

@Module({
  imports: [InfrastructureModule, InteractorModule, PresentationModule],
})
export class AppModule {}
