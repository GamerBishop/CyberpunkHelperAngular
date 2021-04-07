import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { CompetencesComponent } from './competences/competences.component';
import { LoginComponent } from './login/login.component';
import { ReseauxBoardComponent } from './reseaux-board/reseaux-board.component';
import { ReseauxDetailComponent } from './reseaux-detail/reseaux-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'competence', component: CompetencesComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'reseaux/:id', component: ReseauxDetailComponent },
  { path: 'reseaux', component: ReseauxBoardComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }