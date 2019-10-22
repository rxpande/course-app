import { Injectable } from '@angular/core';
import { CourseListItem } from './course-list-item.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  public getCourseItems(): CourseListItem[] {
    return [
      {
        id: 1,
        title: 'MongoDB',
        description: 'Very GOod',
        creationDate: 'Sun Oct 20 2019 18:08:15 GMT+0530',
        durationMinutes: 180,
      },
      {
        id: 2,
        title: 'ExpressJS',
        description: 'Very GOod',
        creationDate: 'Sun Oct 20 2019 18:08:15 GMT+0530',
        durationMinutes: 180,
      },
      {
        id: 3,
        title: 'Angular',
        description: 'Very GOod',
        creationDate: 'Sun Oct 20 2019 18:08:15 GMT+0530',
        durationMinutes: 180,
      },
    ];
  }
}
