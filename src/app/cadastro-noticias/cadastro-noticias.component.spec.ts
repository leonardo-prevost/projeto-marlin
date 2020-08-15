import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroNoticiasComponent } from './cadastro-noticias.component';

describe('CadastroNoticiasComponent', () => {
  let component: CadastroNoticiasComponent;
  let fixture: ComponentFixture<CadastroNoticiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroNoticiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
