import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-registrationb',
  templateUrl: './registrationb.component.html',
  styleUrls: ['./registrationb.component.css'],
})
export class RegistrationbComponent implements OnInit {
  @ViewChild('f', { static: false }) signupForm: NgForm;
  animal: string = 'dog';
  user2: string = '';
  defaultQuestion = 'teacher';
  answer = '';
  odpoved = 'hello dog ss ';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: '',
  };
  submitted = false;

  ngOnInit(): void {}

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.signupForm);

    //priradenie hodnot
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    //this.signupForm.reset();
  }
}
