import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
})
export class CourseSearchComponent implements OnInit {

  searchText: string;

  constructor() { }

  ngOnInit() {
  }

  search() {
    console.log('Search Clicked with Text ', this.searchText);
  }

}
