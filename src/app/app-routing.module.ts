import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeComponent } from './components/me/me.component';
import { ProjetsComponent } from './components/projets/projets.component';
import { CVComponent } from './components/cv/cv.component';

const routes: Routes = [

  {path:'me', component:MeComponent 
  },
  {path:'projets', component:ProjetsComponent 
},
{path:'CV', component:CVComponent 
},
{path:'**', redirectTo:'me' 
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
