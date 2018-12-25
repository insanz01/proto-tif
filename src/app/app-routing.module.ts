import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagePraktikumComponent } from './page-praktikum/page-praktikum.component';
import { PageSlotComponent } from './page-slot/page-slot.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'praktikum', pathMatch: 'full' },
  { path: 'praktikum', component: PagePraktikumComponent },
  { path: 'slot', component: PageSlotComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingPage = [PagePraktikumComponent, PageSlotComponent, PageNotFoundComponent];
