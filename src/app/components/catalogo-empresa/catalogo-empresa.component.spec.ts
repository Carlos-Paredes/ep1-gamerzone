import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoEmpresaComponent } from './catalogo-empresa.component';

describe('CatalogoEmpresaComponent', () => {
  let component: CatalogoEmpresaComponent;
  let fixture: ComponentFixture<CatalogoEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogoEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
