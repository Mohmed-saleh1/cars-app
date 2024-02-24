import { Module } from '@nestjs/common';
import { ConditionerModule } from 'src/conditioner/conditioner.module';
import { EngineModule } from 'src/engine/engine.module';

@Module({
  imports: [EngineModule, ConditionerModule],
})
export class CarModule {}
