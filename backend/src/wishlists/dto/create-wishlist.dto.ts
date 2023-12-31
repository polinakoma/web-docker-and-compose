import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
  IsOptional,
  IsString,
  IsUrl,
  Length,
  MaxLength,
} from 'class-validator';

export class CreateWishlistDto {
  @IsString()
  @Length(1, 250)
  @ApiPropertyOptional({ example: 'Вишлист' })
  name: string;

  @IsArray()
  @IsOptional()
  itemsId: number[];

  @IsUrl()
  @ApiPropertyOptional({ example: 'https://pixnio.com/2.jpg' })
  image: string;
}
