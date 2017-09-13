import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExamplesIndividualComponent } from './work-examples-individual.component';

describe('WorkExamplesIndividualComponent', () => {
  let component: WorkExamplesIndividualComponent;
  let fixture: ComponentFixture<WorkExamplesIndividualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkExamplesIndividualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExamplesIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
