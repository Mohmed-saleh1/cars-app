import { Injectable } from '@nestjs/common';
import { EngineService } from 'src/engine/engine.service';

@Injectable()
export class ConditionerService {
  constructor(private readonly engineSerive: EngineService) {}

  startConditioner() {
    return `${this.engineSerive.startEngine}  the conditioner is working now`;
  }
}
