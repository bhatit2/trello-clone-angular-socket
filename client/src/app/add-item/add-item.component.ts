import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent {
  @Input() show;
  @Output() addCard : EventEmitter<any> = new EventEmitter();
  @Output() cancel : EventEmitter<any> = new EventEmitter();

  save(title) {
    this.addCard.emit(title);
  }

  onCancel() {
    this.cancel.emit();
  }

}
