import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionmenuComponent } from './asignacionmenu.component';

describe('AsignacionmenuComponent', () => {
  let component: AsignacionmenuComponent;
  let fixture: ComponentFixture<AsignacionmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsignacionmenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsignacionmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
