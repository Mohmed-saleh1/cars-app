import { Module } from '@nestjs/common';
import { ConditionerService } from './conditioner.service';
import { BatteryModule } from 'src/battery/battery.module';
import { EngineModule } from 'src/engine/engine.module';

@Module({
  providers: [ConditionerService],
  imports: [BatteryModule, EngineModule],
  exports: [ConditionerService],
})
export class ConditionerModule {}
