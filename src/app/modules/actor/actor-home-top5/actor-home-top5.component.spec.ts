import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorHomeTop5Component } from './actor-home-top5.component';

describe('ActorHomeTop5Component', () => {
  let component: ActorHomeTop5Component;
  let fixture: ComponentFixture<ActorHomeTop5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorHomeTop5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorHomeTop5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
