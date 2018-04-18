import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AddressEntry } from '../body-component/addressEntry.model';

@Component({
  selector: 'app-address-entries-component',
  templateUrl: './address-entries-component.component.html',
  styleUrls: ['./address-entries-component.component.css']
})
export class AddressEntriesComponentComponent implements OnInit {
  @Input() entry: AddressEntry; //model for entry

  constructor() { }

  ngOnInit() {
  }

}
