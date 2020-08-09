import { Injectable } from '@angular/core';
import { SocketioService } from './socketio.service';
import { map } from "rxjs/operators";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateBoardService {
  messages: Subject<any>;
  constructor(private _socketService: SocketioService) {
    this.messages = <Subject<any>>this._socketService.setupSocketConnection().pipe(
      map((response: any) => {
        console.log('response is :', response);
        return response;
      })
    );
  }

  sendMsg(msg) {
    this.messages.next(msg);
  }
}
