import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-film-info',
  templateUrl: './film-info.component.html',
  styleUrls: ['./film-info.component.css']
})
export class FilmInfoComponent implements OnInit {
  @Input() film;

  constructor() { }

  ngOnInit() {
  }

}
