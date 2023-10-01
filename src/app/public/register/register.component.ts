import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  firstname: string | undefined;
  lastname: string | undefined;
  email: any;
  password: string | undefined;
  Confirmpassword: string | undefined;
  constructor(private registerService:RegisterService ) { }

  registerUser(): void {
    const user = {
 firstname:this.firstname,
Confirmpassword: this.Confirmpassword,
email:this.email,
lastname:this.lastname
 
    };
 this.registerService.registerUser(user).subscribe(
  (response) => {
    console.log('Registration successful:', response);
    // Optionally, you can redirect to a login page after registration
  },
  (error) => {
    console.error('Error during registration:', error);
  }
);

  }
}
  
