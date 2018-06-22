import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorDetailInfoComponent } from './actor-detail-info.component';

describe('ActorDetailInfoComponent', () => {
  let component: ActorDetailInfoComponent;
  let fixture: ComponentFixture<ActorDetailInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorDetailInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorDetailInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
