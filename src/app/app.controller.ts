import { Controller, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { AppServiceEmitterEvent } from './enums';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);

  constructor() {}

  @OnEvent(AppServiceEmitterEvent.EverySeconds)
  async everySeconds() {
    return this.logger.verbose('Called every seconds');
  }
}
