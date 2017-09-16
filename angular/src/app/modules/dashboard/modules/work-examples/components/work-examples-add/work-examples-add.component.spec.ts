import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExamplesAddComponent } from './work-examples-add.component';

describe('WorkExamplesAddComponent', () => {
  let component: WorkExamplesAddComponent;
  let fixture: ComponentFixture<WorkExamplesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkExamplesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExamplesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
