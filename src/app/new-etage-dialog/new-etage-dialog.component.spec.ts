import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEtageDialogComponent } from './new-etage-dialog.component';

describe('NewEtageDialogComponent', () => {
  let component: NewEtageDialogComponent;
  let fixture: ComponentFixture<NewEtageDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEtageDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEtageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
