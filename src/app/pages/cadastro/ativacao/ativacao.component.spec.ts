import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtivacaoComponent } from './ativacao.component';

describe('AtivacaoComponent', () => {
  let component: AtivacaoComponent;
  let fixture: ComponentFixture<AtivacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtivacaoComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtivacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
