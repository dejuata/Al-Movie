import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('setup mass edit config', () => {
  //   fixture = TestBed.createComponent(HomeComponent);
  //   component = fixture.componentInstance;
  //   component.accountId = 1;
  //   expect(component.onSearch('valor')).toEqual('app');
  // });

  // describe('When the setupMassEditConfig() is called', () => {
  //   it('SHOULD, massEditConfig be setted usign the global info', () => {
  //     component.massEditConfig = null;
  //     component.accountId = 1;
  //     component.deploymentId = 2;
  //     component.params = {values: []};
  //     component.setupMassEditConfig();
  //     expect(component.massEditConfig.accountId).toEqual(1);
  //   });
  // });

  // describe('WHEN the onSearch() is called', () => {
  //   it('SHOULD onSearch be setted usign the global info', () => {
  //     spyOn(component, 'loadData');
  //     component.params = null;
  //     component.onSearch('holi');
  //     expect(component.params.offset).toEqual(0);
  //     expect(component.params.search).toEqual('holi');
  //   });
  // });

});
