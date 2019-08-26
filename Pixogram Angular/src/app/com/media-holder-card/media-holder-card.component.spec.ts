import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaHolderCardComponent } from './media-holder-card.component';

describe('MediaHolderCardComponent', () => {
  let component: MediaHolderCardComponent;
  let fixture: ComponentFixture<MediaHolderCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaHolderCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaHolderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
