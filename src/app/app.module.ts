import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from'@angular/common/http';

//Material Imports
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import { MatTableModule } from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompetencesComponent } from './competences/competences.component';
import { CompetencesPersoComponent } from './competences-perso/competences-perso.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSortModule } from '@angular/material/sort';
import { LoginComponent } from './login/login.component';
import { ReseauxBoardComponent } from './reseaux-board/reseaux-board.component';
import { ReseauxDetailComponent } from './reseaux-detail/reseaux-detail.component';
import { NewReseauDialogComponent } from './new-reseau-dialog/new-reseau-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NewEtageDialogComponent } from './new-etage-dialog/new-etage-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    CompetencesComponent,
    DashboardComponent,
    CompetencesPersoComponent,
    LoginComponent,
    ReseauxBoardComponent,
    ReseauxDetailComponent,
    NewReseauDialogComponent,
    NewEtageDialogComponent
  ],
  imports: [
    MatFormFieldModule,
    BrowserModule,
    FormsModule, 
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule, 
    MatSortModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDialogModule
    ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NewReseauDialogComponent]
})
export class AppModule { }
