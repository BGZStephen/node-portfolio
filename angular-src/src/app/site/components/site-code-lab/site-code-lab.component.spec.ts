import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteCodeLabComponent } from './site-code-lab.component';

describe('SiteCodeLabComponent', () => {
  let component: SiteCodeLabComponent;
  let fixture: ComponentFixture<SiteCodeLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteCodeLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteCodeLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
