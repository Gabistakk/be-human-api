import { Module } from '@nestjs/common';
import { TrabalhosService } from './trabalhos.service';
import { TrabalhosController } from './trabalhos.controller';
import { CommonModule } from 'src/common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [TrabalhosController],
  providers: [TrabalhosService],
})
export class TrabalhosModule {}
