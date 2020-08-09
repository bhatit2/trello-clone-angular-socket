import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable , Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {
  socket;
  constructor() {   }

  setupSocketConnection() : Subject<MessageEvent>{
    this.socket = io(environment.SOCKET_ENDPOINT);

    // this.socket.on('my broadcast', (data:any) => {
    //   console.log(data);
    // });

    let observable = new Observable(observer => {
      this.socket.on('message', (data) => {
        console.log("Received message from Websocket Server")
        observer.next(data);
      })
      return () => {
        this.socket.disconnect();
      }
  });

  let observer = {
      next: (data: Object) => {
          this.socket.emit('add', JSON.stringify(data));
      },
  };

  return Subject.create(observer, observable);

  }
  
}
