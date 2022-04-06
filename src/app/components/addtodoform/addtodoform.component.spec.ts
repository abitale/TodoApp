import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtodoformComponent } from './addtodoform.component';

describe('AddtodoformComponent', () => {
  let component: AddtodoformComponent;
  let fixture: ComponentFixture<AddtodoformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtodoformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtodoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
