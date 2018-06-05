import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCadastradoComponent } from './form-cadastrado.component';

describe('FormCadastradoComponent', () => {
  let component: FormCadastradoComponent;
  let fixture: ComponentFixture<FormCadastradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCadastradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCadastradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
