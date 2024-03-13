import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Cron } from '@nestjs/schedule';
import { AppServiceEmitterEvent } from './enums';

@Injectable()
export class AppService {
  constructor(private readonly emitter: EventEmitter2) {}

  @Cron('* * * * * *')
  async everySeconds() {
    await this.emitter.emitAsync(AppServiceEmitterEvent.EverySeconds);
  }
}
