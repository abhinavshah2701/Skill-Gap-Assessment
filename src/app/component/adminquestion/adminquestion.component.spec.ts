import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminquestionComponent } from './adminquestion.component';

describe('AdminquestionComponent', () => {
  let component: AdminquestionComponent;
  let fixture: ComponentFixture<AdminquestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminquestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
