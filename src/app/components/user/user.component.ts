import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

    user: User;

    constructor(){
    
    }


      ngOnInit() {
        this.user = {
            firstName: 'Vijay Prasath',
            lastName: 'Muralidharan',
            age: 29,
            email: 'vijayprasath88@gmail.com',
            address: {
                street: '3120 Naamans Road',
                city: 'Wilmington',
                country: 'Delaware'
            }
        }
      }
}

