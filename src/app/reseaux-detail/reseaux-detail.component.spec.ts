import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReseauxDetailComponent } from './reseaux-detail.component';

describe('ReseauxDetailComponent', () => {
  let component: ReseauxDetailComponent;
  let fixture: ComponentFixture<ReseauxDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReseauxDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReseauxDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
