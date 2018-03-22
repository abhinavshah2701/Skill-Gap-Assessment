import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageSkillComponent } from './admin-manage-skill.component';

describe('AdminManageSkillComponent', () => {
  let component: AdminManageSkillComponent;
  let fixture: ComponentFixture<AdminManageSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminManageSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManageSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
