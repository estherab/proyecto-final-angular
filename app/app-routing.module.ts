import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetsComponent } from './pages/sets/sets.component';
import { ManagementComponent } from './pages/management/management.component';

const routes: Routes = [
  {
    path: "sets", component: SetsComponent
  },
  {
    path: "management", component: ManagementComponent
  },
  {
    path: "", pathMatch: "full", component: SetsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
