import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RifasModule } from './rifas/rifas.module';
import { OngsModule } from './ongs/ongs.module';
import { VoluntariosModule } from './voluntarios/voluntarios.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TrabalhosModule } from './trabalhos/trabalhos.module';
import { ComprasModule } from './compras/compras.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [RifasModule, OngsModule, VoluntariosModule, UsuariosModule, TrabalhosModule, ComprasModule, CommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
