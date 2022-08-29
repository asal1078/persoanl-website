import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Inavbar } from 'src/share/models/navbar-links';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor( private route : ActivatedRoute){

    this.route.data.subscribe(item=>{
      console.log("DATA",item);
      
    })
  }

  ngOnInit(): void {
  }

  title !: string;

  menuList : Array<Inavbar> = [
    {
      title: 'About Me',
      routerLink: ['/about-me']
    },
    {
      title: 'Projects',
      routerLink: ['/projects']
    },
    {
      title: 'Education',
      routerLink: ['/education']
    },
    {
      title: 'Contact Me',
      routerLink: ['/contact-me']
    }
  ]
}
