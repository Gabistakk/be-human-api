import { Module } from '@nestjs/common';
import { RifasService } from './rifas.service';
import { RifasController } from './rifas.controller';
import { CommonModule } from 'src/common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [RifasController],
  providers: [RifasService],
})
export class RifasModule {}
