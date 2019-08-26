import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowingMediaComponent } from './following-media.component';

describe('FollowingMediaComponent', () => {
  let component: FollowingMediaComponent;
  let fixture: ComponentFixture<FollowingMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowingMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowingMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
