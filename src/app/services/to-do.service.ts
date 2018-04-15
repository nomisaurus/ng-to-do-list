import { Injectable } from '@angular/core';
import { ToDo } from '../models/to-do';

@Injectable()
export class ToDoService {
  todos: ToDo[] = [
    { name: 'to do 1', complete: false },
    { name: 'to do 2', complete: true },
    { name: 'to do 3', complete: false },
    { name: 'to do 4', complete: false }
  ];

  constructor() { }

  getToDos()  {
    return this.todos;
  }

  deleteToDo(index) {
    this.todos.splice(index, 1);
  }

}
