import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicResolver } from './components/singlePage/dynamic.resolver';
import { DynamicComponent } from './components/singlePage/dynamic.component';

const routes: Routes = [
  { 
      path: 'form', 
      component: DynamicComponent,
      resolve: {
        jsonFileConf: DynamicResolver
      }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
