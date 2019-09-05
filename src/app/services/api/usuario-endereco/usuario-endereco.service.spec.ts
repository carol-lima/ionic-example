import { TestBed } from '@angular/core/testing';

import { UsuarioEnderecoService } from './usuario-endereco.service';

describe('UsuarioEnderecoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsuarioEnderecoService = TestBed.get(UsuarioEnderecoService);
    expect(service).toBeTruthy();
  });
});
