import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { InteractorModule } from './interactor/interactor.module';
import { PresentationModule } from './presentation/presentation.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development',
    }),
    InfrastructureModule,
    InteractorModule,
    PresentationModule,
  ],
})
export class AppModule {}
