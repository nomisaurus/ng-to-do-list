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

  constructor(private dataService: ToDoService) { }

  ngOnInit() {
    this.todos = this.dataService.getToDos();
  }

  deleteToDo(index) {
    this.dataService.deleteToDo(index);
  }

  updateToDo(index) {
    this.dataService.updateToDo(index);
  }

  clearList() {
    this.dataService.clearList();
  }
}
