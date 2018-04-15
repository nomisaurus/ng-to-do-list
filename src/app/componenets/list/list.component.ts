import { Component, OnInit } from '@angular/core';
import { ToDo } from '../../models/to-do';
import { ToDoService } from '../../services/to-do.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  title: string;
  todos: ToDo[];
  hobbies: string[];

  constructor(private dataService: ToDoService) { }

  ngOnInit() {
    console.log(this.dataService.getToDos());
    this.todos = this.dataService.getToDos();
  }

  deleteToDo(todo) {
    console.log('begin delete...' + todo);
    this.dataService.deleteToDo(todo);
  }

}
