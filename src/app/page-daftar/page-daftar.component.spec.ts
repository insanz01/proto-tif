import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDaftarComponent } from './page-daftar.component';

describe('PageDaftarComponent', () => {
  let component: PageDaftarComponent;
  let fixture: ComponentFixture<PageDaftarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDaftarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDaftarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
