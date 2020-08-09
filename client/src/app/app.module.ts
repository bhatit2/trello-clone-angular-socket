import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DragNDropComponent } from './drag-ndrop/drag-ndrop.component';
import { SocketioService } from './socketio.service';
import { AddItemComponent } from './add-item/add-item.component';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    DragNDropComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [SocketioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
