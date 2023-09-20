import { Inject, Injectable, Logger } from '@nestjs/common';
import { externalApiConfig } from '../configs/external-api.config';
import { ExternalApiConfigDto } from '../dtos/external-api-config.dto';

@Injectable()
export class AppService {
  constructor(
    @Inject(externalApiConfig.KEY)
    private readonly config: ExternalApiConfigDto,
  ) {}

  someMethod(): void {
    Logger.log(this.config, AppService.name);
  }
}
