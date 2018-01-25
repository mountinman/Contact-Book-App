import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Contact } from './contact.model';

@Injectable()

export class ContactService{
    contactsChanged = new Subject<Contact[]>();

    private contacts: Contact[] = [];
      


      getContact(){
        return this.contacts;
      }

      getSingleContact(index: number) {
        return this.contacts[index];
      }

      updateContact(index: number, newFormValues: Contact){
        this.contacts[index] = newFormValues;
        this.contactsChanged.next(this.contacts.slice());
        localStorage.setItem('contacts', JSON.stringify(this.contacts));
      }

      addContact(formValues: Contact){
        this.contacts.push(formValues);
        this.contactsChanged.next(this.contacts.slice());
        localStorage.setItem('contacts', JSON.stringify(this.contacts));
      }

      deleteRecipe(index: number) {
        this.contacts.splice(index, 1);
        this.contactsChanged.next(this.contacts.slice());
      }

}