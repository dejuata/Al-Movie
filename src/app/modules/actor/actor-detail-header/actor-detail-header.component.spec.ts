import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorDetailHeaderComponent } from './actor-detail-header.component';

describe('ActorDetailHeaderComponent', () => {
  let component: ActorDetailHeaderComponent;
  let fixture: ComponentFixture<ActorDetailHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorDetailHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorDetailHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
