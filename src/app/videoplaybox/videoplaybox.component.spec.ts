import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoplayboxComponent } from './videoplaybox.component';

describe('VideoplayboxComponent', () => {
  let component: VideoplayboxComponent;
  let fixture: ComponentFixture<VideoplayboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoplayboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoplayboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
