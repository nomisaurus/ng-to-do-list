import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { ToDoService } from './services/to-do.service';
import { AddNewToDoComponent } from './components/add-new-to-do/add-new-to-do.component';
import { GreeterComponent } from './components/greeter/greeter.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddNewToDoComponent,
    GreeterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ToDoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
