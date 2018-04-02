import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateSkillComponent } from './admin-update-skill.component';

describe('AdminUpdateSkillComponent', () => {
  let component: AdminUpdateSkillComponent;
  let fixture: ComponentFixture<AdminUpdateSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUpdateSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUpdateSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
