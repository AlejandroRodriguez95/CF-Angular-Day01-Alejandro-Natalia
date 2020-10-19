import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

blabla: string;

  constructor() { 
    this.blabla = "Text";
  }

  ngOnInit(): void {
  }

}
