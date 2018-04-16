import { Injectable } from '@angular/core';
import { ToDo } from '../models/to-do';

@Injectable()
export class ToDoService {
  todos: ToDo[] = [];

  constructor() { }

  getToDos() {
    if (localStorage.getItem('todos') != null) {
      this.todos = JSON.parse(localStorage.getItem('todos'));
    } else {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
    return this.todos;
  }

  addToDo(todo) {
    this.todos.push({ name: todo, complete: false });
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  deleteToDo(index) {
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  updateToDo(index) {
    this.todos[index].complete = !this.todos[index].complete;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

}
