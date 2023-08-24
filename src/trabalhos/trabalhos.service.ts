import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class TrabalhosService {


  constructor(private readonly prisma: PrismaService) {}


  create(createTrabalhoDto: Prisma.trabalhosCreateInput) {
    return this.prisma.trabalhos.create({
      data: createTrabalhoDto
    });
  }

  findAll() {
    return this.prisma.trabalhos.findMany();
  }

  findOne(id: number) {
    return this.prisma.trabalhos.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateTrabalhoDto: Prisma.trabalhosUpdateInput) {
    return this.prisma.trabalhos.update({
      data: updateTrabalhoDto,
      where:{
        id: id
      }
    });
  }

  remove(id: number) {
    return this.prisma.trabalhos.delete({
      where: {
        id: id,
      },
    });
  }
}
