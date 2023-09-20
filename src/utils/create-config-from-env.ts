import { registerAs } from '@nestjs/config';
import { readConfigFromEnv } from './read-config-from-env';

export function createConfigFromEnv<T extends object>(
  configName: string,
  constructor: {
    new (...args: unknown[]): T;
  },
) {
  return registerAs(configName, async () => readConfigFromEnv(constructor));
}
