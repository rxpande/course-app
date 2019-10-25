import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { CourseListItem } from '../course-list-item.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
})
export class CourseListComponent implements OnInit {

  public courseItems: CourseListItem[] = [];
  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courseItems = this.courseService.getCourseItems();
  }

  editCourse(): void {
    console.log('editCourse clicked');
  }

  deleteCourse(): void {
    console.log( 'deleteCourse Clicked' );
  }

  loadMore(): void {
      console.log( 'loadMore Clicked' );
  }

}
