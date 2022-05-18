import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseThumbnailComponent } from './use-thumbnail.component';

describe('UseThumbnailComponent', () => {
  let component: UseThumbnailComponent;
  let fixture: ComponentFixture<UseThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseThumbnailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
