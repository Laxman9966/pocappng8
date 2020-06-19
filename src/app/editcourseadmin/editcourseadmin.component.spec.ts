import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcourseadminComponent } from './editcourseadmin.component';

describe('EditcourseadminComponent', () => {
  let component: EditcourseadminComponent;
  let fixture: ComponentFixture<EditcourseadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcourseadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcourseadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
