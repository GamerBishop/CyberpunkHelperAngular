import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReseauxBoardComponent } from './reseaux-board.component';

describe('ReseauxBoardComponent', () => {
  let component: ReseauxBoardComponent;
  let fixture: ComponentFixture<ReseauxBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReseauxBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReseauxBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
