import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [{
  path: "blabla",
  component: HeroComponent
},{
  path: "contact",
  component: ContactComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
