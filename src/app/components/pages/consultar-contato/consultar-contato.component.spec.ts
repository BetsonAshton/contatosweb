import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarContatoComponent } from './consultar-contato.component';

describe('ConsultarContatoComponent', () => {
  let component: ConsultarContatoComponent;
  let fixture: ComponentFixture<ConsultarContatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarContatoComponent]
    });
    fixture = TestBed.createComponent(ConsultarContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
