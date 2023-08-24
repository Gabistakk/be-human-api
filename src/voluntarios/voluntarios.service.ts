import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/common/prisma/prisma.service';


@Injectable()
export class VoluntariosService {

  constructor(private readonly prisma: PrismaService) {}


  create(createVoluntarioDto: Prisma.voluntariosCreateInput) {
    return this.prisma.voluntarios.create({
      data: createVoluntarioDto
    });
  }

  findAll() {
    return this.prisma.voluntarios.findMany();
  }

  findOne(id: number) {
    return this.prisma.voluntarios.findUnique({
      where: {
        cpf: id,
      },
    });
  }

  update(id: number, updateVoluntarioDto: Prisma.voluntariosUpdateInput) {
    return this.prisma.voluntarios.update({
      data: updateVoluntarioDto,
      where:{
        cpf: id
    }});
  }

  remove(id: number) {
    return this.prisma.voluntarios.delete({
      where: {
        cpf: id,
      },
    });
  }
}
