import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseSearchComponent } from './course-search/course-search.component';
import { CourseAddComponent } from './course-add/course-add.component';
import { CourseListComponent } from './course-list/course-list.component';

@NgModule({
  declarations: [
    CourseSearchComponent,
    CourseAddComponent,
    CourseListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CourseSearchComponent,
    CourseAddComponent,
    CourseListComponent,
  ]
})
export class CourseModule { }
