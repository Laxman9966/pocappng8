import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcourseadminComponent } from './addcourseadmin.component';

describe('AddcourseadminComponent', () => {
  let component: AddcourseadminComponent;
  let fixture: ComponentFixture<AddcourseadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcourseadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcourseadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
