import { createConfigFromEnv } from '../utils/create-config-from-env';
import { ExternalApiConfigDto } from '../dtos/external-api-config.dto';

export const externalApiConfig = createConfigFromEnv(
  'externalApi',
  ExternalApiConfigDto,
);
