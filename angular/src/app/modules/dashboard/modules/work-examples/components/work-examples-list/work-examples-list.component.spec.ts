import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExamplesListComponent } from './work-examples-list.component';

describe('WorkExamplesListComponent', () => {
  let component: WorkExamplesListComponent;
  let fixture: ComponentFixture<WorkExamplesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkExamplesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExamplesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
