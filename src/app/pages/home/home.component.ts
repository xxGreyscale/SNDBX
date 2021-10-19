import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  emailSent: Boolean = false;
  loading: Boolean = false;
  packages = [
    {
      name: 'Basic',
      description: 'Free sitting, <br /> coffee style lounging',
      price: '100,000 /m',
      listing: [
        'Lobby Listing',
        'Unlimited Internet Access',
        'Unlimited Water, Tea and Coffee'
      ]
    },

    {
      name: 'Hot Desks',
      description: 'Dedicated Desks <br /> ...',
      price: '180,000 /m',
      listing: [
        'Lobby Listing',
        'Unlimited Internet Access',
        'Unlimited Water, Tea and Coffee'
      ]
    },

    {
      name: 'Private Office',
      description: 'Private Office 1-2 people <br /> Dedicated Admin Office',
      price: '350,000 /m',
      listing: [
        'All Basic Package',
        'Boardroom Access',
        'Printing Services'
      ]
    },

    {
      name: 'Private Office',
      description: 'Private Office 3-4 people <br /> Dedicated Admin Office',
      price: '550,000 /m',
      listing: [
        'All Basic Package',
        'Boardroom Access',
        'Printing Services'
      ]
    }

  ]


  eventSpacePackages = [
    {
      name: 'Boardroom',
      description: 'For meetings <br /> Conference call facilities',
      price: '50,000',
      listing: [
        'Lobby Listing',
        'Unlimited Internet Access',
        'Unlimited Water, Tea and Coffee'
      ]
    },

    {
      name: 'Podcast Room',
      description: 'For recording,<br /> Post production not inclusive',
      price: '100,000',
      listing: [
        'Lobby Listing',
        'Unlimited Internet Access',
        'Unlimited Water, Tea and Coffee'
      ]
    },

    {
      name: 'Main Lounge',
      description: 'For meet & Greets/Events<br /> Up to 75 people',
      price: '350,000',
      listing: [
        'Lobby Listing',
        'Unlimited Internet Access',
        'Unlimited Water, Tea and Coffee'
      ]
    },

    {
      name: 'The Observatory',
      description: 'For Workshop Room/Private <br /> Up to 20 people',
      price: '550,000',
      listing: [
        'Lobby Listing',
        'Unlimited Internet Access',
        'Unlimited Water, Tea and Coffee'
      ]
    }

  ]

    // form instance
 contactusForm = new FormGroup({
  name: new FormControl('', [
    Validators.pattern('[a-zA-Z ]*'),
    Validators.maxLength(155),
    Validators.required
  ]),
  companyName: new FormControl('', [
    Validators.pattern('[a-zA-Z ]*'),
    Validators.maxLength(155),
    Validators.required
  ]),
   email: new FormControl('', [
     Validators.email,
     Validators.required
   ]),
   phone: new FormControl('', [
    Validators.maxLength(14),
    Validators.required
  ]),
   message: new FormControl('', [
    Validators.maxLength(1240),
    Validators.required
  ])
 })

 get email(): any {
   return this.contactusForm.get('email')
 }

 get phone(): any {
  return this.contactusForm.get('email')
}

 get name(): any {
  return this.contactusForm.get('name')
}

get companyName(): any {
  return this.contactusForm.get('companyName')
}

 get message(): any {
  return this.contactusForm.get('message')
}



  constructor() { }

  ngOnInit(): void {
  }



  onSubmit(): void{

  }

}
