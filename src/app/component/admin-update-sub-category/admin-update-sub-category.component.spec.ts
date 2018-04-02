import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateSubCategoryComponent } from './admin-update-sub-category.component';

describe('AdminUpdateSubCategoryComponent', () => {
  let component: AdminUpdateSubCategoryComponent;
  let fixture: ComponentFixture<AdminUpdateSubCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUpdateSubCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUpdateSubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
