import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { AddressEntry } from '../body-component/addressEntry.model';
import {FormsModule} from '@angular/forms';
import {AddressEntriesComponentComponent} from '../address-entries-component/address-entries-component.component';
@Component({
  selector: 'app-fields-component',
  templateUrl: './fields-component.component.html',
  styleUrls: ['./fields-component.component.css']
})
export class FieldsComponentComponent implements OnInit {
  @Output() entryAdded = new EventEmitter<AddressEntry>();
  @Output() updateFName = new EventEmitter<String>();
  @Output() updateLName = new EventEmitter<String>();
  @Input() currentIndex:number = null;
  @Input() currentEn: AddressEntry = null;
  @Input() notNull = false;
  
  firstName = "";
  lastName = "";
  companyName = "";
  streetLine1 = "";
  streetLine2 = "";
  city = "";
  state = "";
  zip = null ;
  entryName = "";

  firstNameValidated = true;
  lastNameValidated = true;
  companyValidated = true;
  street1Validated = true;
  cityValidated = true;
  validated = true;
  stateValidated = true;
  zipValidated = true;
  entryNameValidated = true;
  
  constructor() { }

  ngOnInit() {
  }

  onEntry()
  {
    if(this.firstName != "")
    {
      this.firstNameValidated = true;
    }
    else
    {
      this.firstNameValidated = false;
    }
    if(this.lastName != "")
    {
      this.lastNameValidated = true;
    }
    else
    {
      this.lastNameValidated = false;
    }
    if(this.companyName != "")
    {
      this.companyValidated = true;
    }
    else
    {
      this.companyValidated = false;
    }
    if(this.streetLine1 != "")
    {
      this.street1Validated = true;
    }
    else
    {
      this.street1Validated = false;
    }
    if(this.city != "")
    {
      this.cityValidated = true;
    }
    else
    {
      this.cityValidated = false;
    }
    if(this.state.length == 2 && /^[0-9]{2}$/.test(this.state) == false)
    {
      this.stateValidated = true;
    }
    else
    {
      this.stateValidated = false;
    }
    if(/^[0-9]{5}$/.test(this.zip))
    {
      this.zipValidated = true;
    }
    else
    {
      this.zipValidated = false;
    }
    if(this.entryName != "")
    {
      this.entryNameValidated = true;
    }
    else
    {
      this.entryNameValidated = false;
    }
    if(this.firstNameValidated && this.lastNameValidated && this.companyValidated && this.street1Validated && this.cityValidated && this.stateValidated && this.zipValidated && this.entryNameValidated)
    {
      var newEntry = new AddressEntry(this.firstName, this.lastName, this.companyName, this.streetLine1, this.streetLine2, this.city, this.state.toUpperCase(), this.zip, this.entryName);
      this.entryAdded.emit(newEntry);
      this.validated = true;
    }
    else
    {
      this.validated = false;
    }
  }
  
  updateEntryName()
  {
    this.entryName = this.lastName + ", " + this.firstName;
    this.updateFName.emit(this.firstName);
    if(this.lastName != "")
    this.updateLName.emit(this.lastName);
  }

  fieldFiller(entry:AddressEntry)
  {
    this.firstName = entry.firstName;
    this.lastName = entry.lastName;
    this.companyName = entry.company;
    this.streetLine1 = entry.street1;
    this.streetLine2 = entry.street2;
    this.city = entry.city;
    this.state = entry.state;
    this.zip = entry.zip;
    this.entryName = entry.entryName;
  }

  clearFields()
  {
  this.firstName = "";
  this.lastName = "";
  this.companyName = "";
  this.streetLine1 = "";
  this.streetLine2 = "";
  this.city = "";
  this.state = "";
  this.zip = null ;
  this.entryName = "";
  }
}
