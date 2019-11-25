import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListComponent } from './course-list.component';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Perform Course List Operations', () => {
    it('Edit Course', async( () => {
      const result = component.editCourse();
      expect(result).toBe('editCourse clicked');
    }));

    it('Delete Course', async( () => {
      const result = component.deleteCourse();
      expect(result).toBe('deleteCourse clicked');
    }));

    it('Laod More Courses', async( () => {
      const result = component.loadMore();
      expect(result).toBe('loadMore clicked');
    }));
  });
});
