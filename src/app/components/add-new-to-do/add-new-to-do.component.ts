import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../../services/to-do.service';

@Component({
  selector: 'app-add-new-to-do',
  templateUrl: './add-new-to-do.component.html',
  styleUrls: ['./add-new-to-do.component.css']
})
export class AddNewToDoComponent implements OnInit {
  newToDo: string;

  constructor(private dataService: ToDoService) { }

  ngOnInit() {
  }

  addToDo() {
    this.dataService.addToDo(this.newToDo);
    this.newToDo = '';
  }

}
