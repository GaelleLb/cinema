import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../cinema.service';
import { Cinema } from '../cinema';

@Component({
  selector: 'app-cinema-list',
  templateUrl: './cinema-list.component.html',
  styleUrls: ['./cinema-list.component.css']
})
export class CinemaListComponent implements OnInit {
  cinemas : Cinema[];

  constructor(cinemaService : CinemaService) { 
    this.cinemas = cinemaService.getAll();
  }

  ngOnInit() {
  }

}
