import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/common/prisma/prisma.service';


@Injectable()
export class RifasService {


  constructor(private readonly prisma: PrismaService) {}


  create(createRifaDto: Prisma.rifasCreateInput) {
    return this.prisma.rifas.create({
      data: createRifaDto
    });
  }

  findAll() {
    return this.prisma.rifas.findMany();;
  }

  findOne(id: number) {
    return this.prisma.rifas.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateRifaDto: Prisma.rifasUpdateInput) {
    return this.prisma.rifas.update({
      data: updateRifaDto,
      where:{
        id: id
      }
    });
  }

  remove(id: number) {
    return this.prisma.rifas.delete({
      where: {
        id: id,
      },
    });
  }
}
