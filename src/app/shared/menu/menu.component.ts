import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onScrollEvent($event:Event){
    let menu:any = document.getElementById('menu')
    if(document.documentElement.scrollTop < 500){
      menu.classList.add('bg-dark')
      menu.classList.remove('bg-menu')
    }else{
      menu.classList.remove('bg-dark')
      menu.classList.add('bg-menu')
    }
  }
}
