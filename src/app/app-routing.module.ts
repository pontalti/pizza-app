import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicResolver } from './components/singlePage/dynamic.resolver';
import { DynamicComponent } from './components/singlePage/dynamic.component';
import { TabDynamicComponent } from './components/tabPage/tab-dynamic.component';
import { TabDynamicResolver } from './components/tabPage/tab-dynamic.resolver';

const routes: Routes = [
  { 
      path: 'form', 
      component: DynamicComponent,
      resolve: {
        jsonFileConf: DynamicResolver
      }
  },
  { 
    path: 'tab', 
    component: TabDynamicComponent,
    resolve:{
      jsonFileConf: TabDynamicResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
