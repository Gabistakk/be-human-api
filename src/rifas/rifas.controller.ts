import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RifasService } from './rifas.service';
import { Prisma } from '@prisma/client';


@Controller('rifas')
export class RifasController {
  constructor(private readonly rifasService: RifasService) {}

  @Post()
  create(@Body() createRifaDto: Prisma.rifasCreateInput) {
    return this.rifasService.create(createRifaDto);
  }

  @Get()
  findAll() {
    return this.rifasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rifasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRifaDto: Prisma.rifasUpdateInput) {
    return this.rifasService.update(+id, updateRifaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rifasService.remove(+id);
  }
}
