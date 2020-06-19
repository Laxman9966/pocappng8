import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagenoutfoundComponent } from './pagenoutfound.component';

describe('PagenoutfoundComponent', () => {
  let component: PagenoutfoundComponent;
  let fixture: ComponentFixture<PagenoutfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagenoutfoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagenoutfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
