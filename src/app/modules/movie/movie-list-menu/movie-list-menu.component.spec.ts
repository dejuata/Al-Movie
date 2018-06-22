import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListMenuComponent } from './movie-list-menu.component';

describe('MovieListMenuComponent', () => {
  let component: MovieListMenuComponent;
  let fixture: ComponentFixture<MovieListMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieListMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
