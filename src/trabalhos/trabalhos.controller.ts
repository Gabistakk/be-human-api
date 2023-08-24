import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TrabalhosService } from './trabalhos.service';
import { Prisma } from '@prisma/client';

@Controller('trabalhos')
export class TrabalhosController {
  constructor(private readonly trabalhosService: TrabalhosService) {}

  @Post()
  create(@Body() createTrabalhoDto: Prisma.trabalhosCreateInput) {
    return this.trabalhosService.create(createTrabalhoDto);
  }

  @Get()
  findAll() {
    return this.trabalhosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trabalhosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTrabalhoDto: Prisma.trabalhosUpdateInput) {
    return this.trabalhosService.update(+id, updateTrabalhoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trabalhosService.remove(+id);
  }
}
