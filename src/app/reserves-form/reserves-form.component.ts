import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'app-reserves-form',
  templateUrl: './reserves-form.component.html',
  styleUrls: ['./reserves-form.component.css']
})
export class ReservesFormComponent implements OnInit {

  constructor(public roomService: RoomsService) { }

  ngOnInit(): void {
  }

  crearReserva(data:NgForm): void {
    let dataSend = {
      name : 'Tu madre',
      last_name : ' X ',
      phone : '1235875653',
      start_date : data.value.entrada ,
      end_date : data.value.salida ,
      number_people : Number(data.value.adultos )+Number(data.value.niños )
    }

    this.roomService.addReserve(dataSend)

    this.roomService.addReserve(dataSend).subscribe(res =>{
      console.log(res)
    })
  }

}
