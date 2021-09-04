import { Injectable } from '@angular/core';

interface Taks {
  title: string;
}

@Injectable()
export class TasksService {
  list: Array<Taks> = [];

  constructor() {}

  getList() {
    return this.list;
  }
  add(title: string) {
    this.list.push({ title });
  }
  remove(index: number) {
    this.list.slice(index, 1);
  }
}
