import { Module } from '@nestjs/common';
import { ConditionerService } from './conditioner.service';

@Module({
  providers: [ConditionerService]
})
export class ConditionerModule {}
