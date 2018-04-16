import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ListComponent } from './componenets/list/list.component';
import { ToDoService } from './services/to-do.service';
import { AddNewToDoComponent } from './componenets/add-new-to-do/add-new-to-do.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddNewToDoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ToDoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
