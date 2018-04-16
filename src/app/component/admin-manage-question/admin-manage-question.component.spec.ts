import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageQuestionComponent } from './admin-manage-question.component';

describe('AdminManageQuestionComponent', () => {
  let component: AdminManageQuestionComponent;
  let fixture: ComponentFixture<AdminManageQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminManageQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManageQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
