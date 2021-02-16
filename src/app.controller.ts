import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiQuery,
  ApiParam,
} from '@nestjs/swagger';

import { LineOfItemsDto } from './dto/line-of-items.dto';

@ApiTags('Packaging Line')
@Controller('packaging-line')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('optimize-packaging-boxes')
  @ApiOperation({
    summary: 'List attributes',
    description: 'Returns the list of attributes.',
  })
  optimizePackagingBoxes(@Body() line: LineOfItemsDto): string {
    return this.appService.optimize(line);
  }
}
