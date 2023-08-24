import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/common/prisma/prisma.service';


@Injectable()
export class UsuariosService {

  constructor(private readonly prisma: PrismaService) {}


  create(createUsuarioDto: Prisma.usuariosCreateInput) {
    return this.prisma.usuarios.create({
      data: createUsuarioDto
    });
  }

  findAll() {
    return this.prisma.usuarios.findMany();
  }

  findOne(id: number) {
    return this.prisma.usuarios.findUnique({
      where: {
        cpf: id,
      },
    });
  }

  update(id: number, updateUsuarioDto: Prisma.usuariosUpdateInput) {
    return this.prisma.usuarios.update({
      data: updateUsuarioDto,
      where:{
        cpf: id
      }
    });
  }

  remove(id: number) {
    return this.prisma.usuarios.delete({
      where: {
        cpf: id,
      },
    });
  }
}
