import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoandaudioComponent } from './videoandaudio.component';

describe('VideoandaudioComponent', () => {
  let component: VideoandaudioComponent;
  let fixture: ComponentFixture<VideoandaudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoandaudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoandaudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
