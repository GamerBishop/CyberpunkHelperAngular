import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReseauDialogComponent } from './new-reseau-dialog.component';

describe('NewReseauDialogComponent', () => {
  let component: NewReseauDialogComponent;
  let fixture: ComponentFixture<NewReseauDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewReseauDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewReseauDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
