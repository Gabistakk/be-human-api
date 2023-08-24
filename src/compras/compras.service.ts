import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client'
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class ComprasService {


  constructor(private readonly prisma: PrismaService) {}


  create(createCompraDto: Prisma.comprasCreateInput) {
    return this.prisma.compras.create({
      data: createCompraDto
    });
  }

  findAll() {
    return this.prisma.compras.findMany();
  }

  findOne(id: number) {
    return this.prisma.compras.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateCompraDto: Prisma.comprasUpdateInput) {
    return this.prisma.compras.update({
      data: updateCompraDto,
      where:{
        id: id
      }
    });
  }

  remove(id: number) {
    return this.prisma.compras.delete({
      where: {
        id: id,
      },
    });
  }
}
