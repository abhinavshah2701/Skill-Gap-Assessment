import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageSubCategoryComponent } from './admin-manage-sub-category.component';

describe('AdminManageSubCategoryComponent', () => {
  let component: AdminManageSubCategoryComponent;
  let fixture: ComponentFixture<AdminManageSubCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminManageSubCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManageSubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
