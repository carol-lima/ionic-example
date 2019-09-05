import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosPessoaisComponent } from './dados-pessoais.component';

describe('DadosPessoaisComponent', () => {
  let component: DadosPessoaisComponent;
  let fixture: ComponentFixture<DadosPessoaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosPessoaisComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosPessoaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
