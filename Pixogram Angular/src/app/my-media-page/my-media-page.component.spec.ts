import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMediaPageComponent } from './my-media-page.component';

describe('MyMediaPageComponent', () => {
  let component: MyMediaPageComponent;
  let fixture: ComponentFixture<MyMediaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMediaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMediaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
