import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cinema-card',
  templateUrl: './cinema-card.component.html',
  styleUrls: ['./cinema-card.component.css']
})
export class CinemaCardComponent implements OnInit {
  @Input() cinema;

  constructor() { }

  ngOnInit() {
  }

}
