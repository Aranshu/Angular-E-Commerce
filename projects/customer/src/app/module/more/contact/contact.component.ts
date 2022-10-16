import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  isLoading:boolean;

  constructor() { 
    this.isLoading=true
  }

  ngOnInit(): void {
    this.isLoading=false
  }

}
