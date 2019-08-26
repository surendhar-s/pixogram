import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadMediaMultipleComponent } from './upload-media-multiple.component';

describe('UploadMediaMultipleComponent', () => {
  let component: UploadMediaMultipleComponent;
  let fixture: ComponentFixture<UploadMediaMultipleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadMediaMultipleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadMediaMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
