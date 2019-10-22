import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { CourseListItem } from '../course-list-item.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  public courseItems: CourseListItem[] = [];
  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courseItems = this.courseService.getCourseItems();
  }

}
