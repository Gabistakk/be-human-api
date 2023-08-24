import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/common/prisma/prisma.service';


@Injectable()
export class OngsService {

 constructor(private readonly prisma: PrismaService) {}

  create(createOngDto: Prisma.ongsCreateInput) {
    return this.prisma.ongs.create({
      data: createOngDto
    });
  }

  findAll() {
    return this.prisma.ongs.findMany();
  }

  findOne(id: number) {
    return this.prisma.ongs.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateOngDto: Prisma.ongsUpdateInput) {
    return this.prisma.ongs.update({
      data: updateOngDto,
      where:{
        id: id
      }
    });
  }

  remove(id: number) {
    return this.prisma.ongs.delete({
      where: {
        id: id,
      },
    });
  }
}
