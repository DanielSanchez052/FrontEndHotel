import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public roomList:any[]=[]

  constructor(public roomService: RoomsService) {
    this.roomService.getRooms().subscribe(res =>{
      this.roomList = res.data
    })
  }

  ngOnInit(): void {
  }

}
