import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSlotComponent } from './page-slot.component';

describe('PageSlotComponent', () => {
  let component: PageSlotComponent;
  let fixture: ComponentFixture<PageSlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
