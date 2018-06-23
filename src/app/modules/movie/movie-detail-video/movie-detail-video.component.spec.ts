import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailVideoComponent } from './movie-detail-video.component';

describe('MovieDetailVideoComponent', () => {
  let component: MovieDetailVideoComponent;
  let fixture: ComponentFixture<MovieDetailVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetailVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
