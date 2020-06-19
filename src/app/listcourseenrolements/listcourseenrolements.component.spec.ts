import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcourseenrolementsComponent } from './listcourseenrolements.component';

describe('ListcourseenrolementsComponent', () => {
  let component: ListcourseenrolementsComponent;
  let fixture: ComponentFixture<ListcourseenrolementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcourseenrolementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcourseenrolementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
