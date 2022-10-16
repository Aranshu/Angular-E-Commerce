import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';

@NgModule({
  declarations: [BlogListComponent, BlogHomeComponent],
  imports: [CommonModule, BlogRoutingModule],
})
export class BlogModule {}
