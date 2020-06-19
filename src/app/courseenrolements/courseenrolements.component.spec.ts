import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseenrolementsComponent } from './courseenrolements.component';

describe('CourseenrolementsComponent', () => {
  let component: CourseenrolementsComponent;
  let fixture: ComponentFixture<CourseenrolementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseenrolementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseenrolementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
