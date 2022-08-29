import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.css']
})
export class BreadCrumbComponent implements OnInit {

  title : string = '';

  constructor( private route : ActivatedRoute ) {
    this.title = route.snapshot.data['title'];
    console.log(this.title);
    
   }

  ngOnInit(): void {
  }

}
