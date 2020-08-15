import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailNoticiaComponent } from './detail-noticia.component';

describe('DetailNoticiaComponent', () => {
  let component: DetailNoticiaComponent;
  let fixture: ComponentFixture<DetailNoticiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailNoticiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
