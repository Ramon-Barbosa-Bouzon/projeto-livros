import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrosInserirComponent } from './livros-inserir.component';

describe('LivrosInserirComponent', () => {
  let component: LivrosInserirComponent;
  let fixture: ComponentFixture<LivrosInserirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivrosInserirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivrosInserirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
