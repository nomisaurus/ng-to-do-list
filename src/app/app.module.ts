import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

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
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatListModule
  ],
  providers: [ToDoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
