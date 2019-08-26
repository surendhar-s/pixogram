import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadMediaSingleComponent } from './upload-media-single.component';

describe('UploadMediaSingleComponent', () => {
  let component: UploadMediaSingleComponent;
  let fixture: ComponentFixture<UploadMediaSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadMediaSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadMediaSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
