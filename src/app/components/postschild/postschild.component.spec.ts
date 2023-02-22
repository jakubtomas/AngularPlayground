import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostschildComponent } from './postschild.component';

describe('PostschildComponent', () => {
  let component: PostschildComponent;
  let fixture: ComponentFixture<PostschildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostschildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostschildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
