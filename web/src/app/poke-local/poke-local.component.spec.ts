import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeLocalComponent } from './poke-local.component';

describe('PokeLocalComponent', () => {
  let component: PokeLocalComponent;
  let fixture: ComponentFixture<PokeLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeLocalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
