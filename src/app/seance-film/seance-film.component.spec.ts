import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeanceFilmComponent } from './seance-film.component';

describe('SeanceFilmComponent', () => {
  let component: SeanceFilmComponent;
  let fixture: ComponentFixture<SeanceFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeanceFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeanceFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
