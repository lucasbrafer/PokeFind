import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeListaComponent } from './poke-lista.component';

describe('PokeListaComponent', () => {
  let component: PokeListaComponent;
  let fixture: ComponentFixture<PokeListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
