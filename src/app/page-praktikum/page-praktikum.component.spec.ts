import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePraktikumComponent } from './page-praktikum.component';

describe('PagePraktikumComponent', () => {
  let component: PagePraktikumComponent;
  let fixture: ComponentFixture<PagePraktikumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePraktikumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePraktikumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
