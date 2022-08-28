import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Inavbar } from 'src/share/models/navbar-links';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private router : Router) { }

  @Input() menuList !: Array<Inavbar> 
  @ViewChild('title') title !: ElementRef;
  
  ngOnInit(): void {
  }

  goToPage(){
    console.log(this.title.nativeElement.innerText)
    // this.router.navigate([this.title.nativeElement.href])
  }



}
