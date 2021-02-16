
import { ApiProperty } from '@nestjs/swagger';

import { IsNumber } from 'class-validator';

export class LineOfItemsDto { 
    @ApiProperty({ description: 'The line of items to be packed', example: '163841689525773' })
    @IsNumber()
    items: number;
}
