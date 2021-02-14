import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksTileComponent } from './books-tile.component';

describe('BooksTileComponent', () => {
  let component: BooksTileComponent;
  let fixture: ComponentFixture<BooksTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
