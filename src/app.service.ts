import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '{ "API-REST": "1.0.0-SNAPSHOT with NestJS is online!" }';
  }
}
