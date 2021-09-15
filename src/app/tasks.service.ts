import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

interface Taks {
  title: string;
}

@Injectable()
export class TasksService {
  list: Array<Taks> = [];

  constructor(public logger: LoggerService) {
    this.logger.add('TasksComponent constructed');
  }

  getList() {
    return this.list;
  }
  add(title: string) {
    this.list.push({ title });
  }
  remove(index: number) {
    this.list.splice(index, 1);
  }
}
