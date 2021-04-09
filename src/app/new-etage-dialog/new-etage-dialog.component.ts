import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NewReseauDialogComponent } from '../new-reseau-dialog/new-reseau-dialog.component';

@Component({
  selector: 'app-new-etage-dialog',
  templateUrl: './new-etage-dialog.component.html',
  styleUrls: ['./new-etage-dialog.component.css']
})
export class NewEtageDialogComponent implements OnInit {


  Actions: string[] = ["Porte dérobée",
    "Analyse",
    "Contrôle"];
  selected = '';
    
  _myForm: FormGroup; 

  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<NewReseauDialogComponent>) { 
    this._myForm = this.fb.group({
      niveauEtage: [ , Validators.required],
      rencontre: [ , Validators.required],
      action : [,],
      sd : [,]
    });
  }

  
  saveEtage(): void {
    this.dialogRef.close(this._myForm.value);
  }


  close() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }
}
