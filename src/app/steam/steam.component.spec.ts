import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteamComponent } from './steam.component';

describe('SteamComponent', () => {
  let component: SteamComponent;
  let fixture: ComponentFixture<SteamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SteamComponent]
    });
    fixture = TestBed.createComponent(SteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
