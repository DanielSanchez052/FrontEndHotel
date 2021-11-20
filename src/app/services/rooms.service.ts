import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(private request:HttpClient) {
  }

  getRooms():Observable<any>{
    return this.request.get('https://apihotelavanzada.herokuapp.com/api/v1/room')
  }
}
