import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndiceComponent } from "./pages/indice/indice.component";
import { ContactoComponent } from "./pages/contacto/contacto.component";
import { TutorialesComponent } from "./pages/tutoriales/tutoriales.component";


const routes: Routes = [
  {path:"inicio", component: IndiceComponent},
  {path:"contacto", component: ContactoComponent},
  {path:"tutoriales", component: TutorialesComponent},
  {path:'**', pathMatch:'full', redirectTo:'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
