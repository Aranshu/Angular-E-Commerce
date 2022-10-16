import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';

const routes: Routes = [
  { path: '', redirectTo: 'BlogList', pathMatch: 'full' },
  { path: 'BlogList', component: BlogListComponent },
  { path: 'BlogHome', component: BlogHomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
