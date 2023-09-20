import { Module } from '@nestjs/common';
import { AppService } from './services/app.service';
import { ConfigModule } from '@nestjs/config';
import { externalApiConfig } from './configs/external-api.config';

@Module({
  imports: [ConfigModule.forFeature(externalApiConfig)],
  providers: [AppService],
})
export class AppModule {}
