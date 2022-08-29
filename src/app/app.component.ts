import { Component, OnInit } from '@angular/core';
import { Inavbar } from 'src/share/models/navbar-links';
import { NavbarData } from 'src/share/datas/navbar-items';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  menuList: Array<Inavbar> = [];

  constructor(){
  }

  ngOnInit(): void {
    of(NavbarData).subscribe((data)=>{
      this.menuList = data;
    })
  }



}
