import { OnInit } from '@angular/core';
import { Component, Inject, Optional } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatInput } from '@angular/material/input';
import { MatFormField } from '@angular/material/form-field';



export interface givenData {
  description: string;
  nomReseau: string;
}

@Component({
  selector: 'app-new-reseau-dialog',
  templateUrl: './new-reseau-dialog.component.html',
  styleUrls: ['./new-reseau-dialog.component.css']
})
export class NewReseauDialogComponent implements OnInit {


  _myForm: FormGroup; 

  Actions: string[] = ["Porte dérobée",
    "Analyse",
    "Contrôle"];

  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<NewReseauDialogComponent>) { 
    this._myForm = this.fb.group({
      nomReseau: [ , Validators.required],
      description: [ , Validators.required]
    });
  }


  saveReseau(): void {
    this.dialogRef.close(this._myForm.value);
  }


  close() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
