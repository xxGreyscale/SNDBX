import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  packageOption: any;

  sendEmailAPI: string = 'https://hqp2yknuhd.execute-api.eu-west-1.amazonaws.com/prod/contact-us'

  

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
  contactName: new FormControl('', [
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
  targetValue: any;
  packageOptionSelected: any;

 get email(): any {
   return this.contactusForm.get('email')
 }

 get phone(): any {
  return this.contactusForm.get('phone')
}

 get contactName(): any {
  return this.contactusForm.get('contactName')
}

get companyName(): any {
  return this.contactusForm.get('companyName')
}

 get message(): any {
  return this.contactusForm.get('message')
}



  constructor(private htppClient: HttpClient) {
    console.log(this.loading, this.emailSent);
    
   }

  ngOnInit(): void {
  }

  sendEmail(payload: any): Observable<any> {
    const headers = { 'Content-Type': 'application/json; charset=utf-8'};
    return this.htppClient.post<any>(this.sendEmailAPI, payload, { headers })
    .pipe(
      retry(1),
      catchError(this.handleError)
      )
  }



  onSubmit(): void{
    // take the data and validate it
    this.loading = true
    const formData = this.contactusForm.value;
    const payload = {
      companyName: formData.companyName,
      contactName: formData.contactName,
      email: formData.email,
      phone: formData.phone,
      space: this.packageOptionSelected,
      message: formData.message
    }

    this.emailSent = false
    // console.log(this.sendEmail(payload));
    
    this.sendEmail(payload).subscribe( response => {
      this.emailSent = true
      this.loading = false
    })
  }

  onChange(targetValue: any) {

    this.packageOption = targetValue.value === 'workspace' ? this.packages : this.eventSpacePackages;
  }

  onPackageSelected(target: any): void {
    this.packageOptionSelected = target.value
  }


  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }


}

