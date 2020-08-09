import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { UpdateBoardService } from '../update-board.service';

@Component({
  selector: 'app-drag-ndrop',
  templateUrl: './drag-ndrop.component.html',
  styleUrls: ['./drag-ndrop.component.scss']
})
export class DragNDropComponent implements OnInit {
  cols: any = {
    todo: [],
    doing: [],
    done: []
  }
  showTodoAddItem: boolean = false;
  showDoingAddItem: boolean = false;
  showDoneAddItem: boolean = false;

  constructor(private updateBoardService: UpdateBoardService) { }

  ngOnInit() {
    this.cols = [];
    this.updateBoardService.messages.subscribe(msg => {
      this.cols = msg;
    })
  }
  addTodoCard(title) {
    this.cols.todo.push(title);
    this.updateBoardService.sendMsg(this.cols);
    this.toggleTodoAddItem();
  }

  toggleTodoAddItem() {
    this.showTodoAddItem = !this.showTodoAddItem;
  }

  addDoingCard(title) {
    this.cols.doing.push(title);
    this.updateBoardService.sendMsg(this.cols);
    this.toggleDoingAddItem();
  }

  toggleDoingAddItem() {
    this.showDoingAddItem = !this.showDoingAddItem;
  }

  addDoneCard(title) {
    this.cols.done.push(title);
    this.updateBoardService.sendMsg(this.cols);
    this.toggleDoneAddItem();
  }

  toggleDoneAddItem() {
    this.showDoneAddItem = !this.showDoneAddItem;
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    this.updateBoardService.sendMsg(this.cols);
  }

}
