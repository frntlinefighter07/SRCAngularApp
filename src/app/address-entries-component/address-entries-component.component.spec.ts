import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressEntriesComponentComponent } from './address-entries-component.component';

describe('AddressEntriesComponentComponent', () => {
  let component: AddressEntriesComponentComponent;
  let fixture: ComponentFixture<AddressEntriesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressEntriesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressEntriesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
