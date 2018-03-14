import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageFormComponent } from './admin-manage-form.component';

describe('AdminManageFormComponent', () => {
  let component: AdminManageFormComponent;
  let fixture: ComponentFixture<AdminManageFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminManageFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
