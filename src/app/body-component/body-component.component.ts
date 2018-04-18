import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import {AddressEntry} from './addressEntry.model';
import {FieldsComponentComponent} from '../fields-component/fields-component.component';

@Component({
  selector: 'app-body-component',
  templateUrl: './body-component.component.html',
  styleUrls: ['./body-component.component.css']
})
export class BodyComponentComponent implements OnInit {
 
  @Input() names: AddressEntry[] = [];  //complete list of names entered 
  @Input() displayNames: AddressEntry[] = []  //list of names being shown while user types 
  @Input() currentEntry:AddressEntry = null;  //current address entry selected
  @Input() clickedIndex = null; //index of currently selected address entry
  //@Input() notNull = false; 
  @Input() currentFirstName = ""; //current name being typed into the first name field
  contains: boolean = false;  //boolean used to prevent duplicate entries

  @ViewChild(FieldsComponentComponent) fields:FieldsComponentComponent;

  constructor() { }

  ngOnInit() {
  }
  //method for when an entry is added
  onEntryAdded(entry: AddressEntry)
  {
    this.contains = false;

    for(var i = 0; i < this.names.length; i++)
    {
      if(entry.entryName == this.names[i].entryName)
      {
      this.contains = true;
      }
    }
    if(!this.contains)
    {
      this.names.push(entry);
    } 

    this.displayNames = this.names;
  }
  //method to get index of currently clicked entry
  grabIndex(index:number)
  {
    this.clickedIndex = index;
    this.currentEntry = this.names[index];
    this.fields.fieldFiller(this.currentEntry);
  }
  //method to update list as first name is entered
  onFNameUpdated(name: string)
  {
    this.displayNames = [];

    for(var i = 0; i < this.names.length; i++)
    {
      if(this.names[i].firstName.includes(name) || this.names[i].lastName.includes(name))
      {
        this.displayNames.push(this.names[i]);
      }
      
    }
  }

  onLNameUpdated(name: string)
  {
    this.displayNames = [];

    for(var i = 0; i < this.names.length; i++)
    {
      if(this.names[i].firstName.includes(name) || this.names[i].lastName.includes(name))
      {
        this.displayNames.push(this.names[i]);
      }
      
    }
  }
}
