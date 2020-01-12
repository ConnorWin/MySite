import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayingGamesComponent } from './playing-games.component';

describe('PlayingGamesComponent', () => {
  let component: PlayingGamesComponent;
  let fixture: ComponentFixture<PlayingGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayingGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayingGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
