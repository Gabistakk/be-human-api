import { Module } from '@nestjs/common';
import { VoluntariosService } from './voluntarios.service';
import { VoluntariosController } from './voluntarios.controller';
import { CommonModule } from 'src/common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [VoluntariosController],
  providers: [VoluntariosService],
})
export class VoluntariosModule {}
