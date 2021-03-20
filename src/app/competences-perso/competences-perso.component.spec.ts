import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencesPersoComponent } from './competences-perso.component';

describe('CompetencesPersoComponent', () => {
  let component: CompetencesPersoComponent;
  let fixture: ComponentFixture<CompetencesPersoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetencesPersoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetencesPersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
