import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      /* define app module routes here, e.g., to lazily load a module
         (do not place feature module routes here, use an own -routing.module.ts in the feature instead)
       */
      { path: '', component: HomeComponent },
      { path: 'contact', component: ContactComponent }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
