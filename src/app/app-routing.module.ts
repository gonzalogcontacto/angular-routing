import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './core/components/contact/contact.component';
import { HomeComponent } from './core/components/home/home.component';
import { InputComponent } from './shared/components/input/input.component';

const routes: Routes = [
    { path: 'contact', component: ContactComponent},
    { path: 'homepage', component: HomeComponent},
    { path: 'input', component: InputComponent},
    { path: '**', redirectTo: 'homepage'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
