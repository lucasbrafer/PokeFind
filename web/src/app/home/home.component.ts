import { Component, OnInit, AfterContentInit, ViewChild, ElementRef, NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, AfterContentInit {

  constructor(private elementeRef: ElementRef) { }
  ngAfterContentInit(): void {
    this.elementeRef.nativeElement.ownerDocument.body.style.backgroundColor = '#FF6169';
  }

  ngOnInit(): void {
  }

}
