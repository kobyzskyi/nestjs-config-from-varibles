import { IsNumber, IsString, IsUrl, Min } from '@nestjs/class-validator';
import { Expose, Type } from 'class-transformer';

export class ExternalApiConfigDto {
  @IsUrl()
  @Expose({ name: 'EXTERNAL_API_URL' })
  public readonly url: string;

  @IsString()
  @Expose({ name: 'EXTERNAL_API_USERNAME' })
  public readonly username: string;

  @IsString()
  @Expose({ name: 'EXTERNAL_API_PASSWORD' })
  public readonly password: string;

  @IsNumber()
  @Min(1)
  @Type(() => Number)
  @Expose({ name: 'EXTERNAL_API_TOKEN_TTL' })
  public readonly tokenTTL: number = 60_000;
}
