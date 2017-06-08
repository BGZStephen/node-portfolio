import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologiesManageComponent } from './technologies-manage.component';

describe('TechnologiesManageComponent', () => {
  let component: TechnologiesManageComponent;
  let fixture: ComponentFixture<TechnologiesManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologiesManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologiesManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
