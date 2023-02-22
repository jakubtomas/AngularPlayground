import {Component, OnInit} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";

@Component({
    selector: 'app-registration2',
    templateUrl: './registration2.component.html',
    styleUrls: ['./registration2.component.css']
})
export class Registration2Component implements OnInit {

    form: any = {};
    isSuccessful = false;
    isSignUpFailed = false;
    errorMessage = '';

    constructor() {
    }

    ngOnInit(): void {
    }

    userForm = new UntypedFormGroup({
        name: new UntypedFormControl(),
        age: new UntypedFormControl('20')
    });


    onSubmit(): void {
        /*    this.authService.registerUser(this.form).subscribe(
                data => {
                  console.log(data);
                  this.isSuccessful = true;
                  this.isSignUpFailed = false;

                  window.location.replace("/login");
                  this.snackBarService.successMessage(data.message);
                },
                err => {

                  this.errorMessage = err.error.message;
                  this.isSignUpFailed = true;
                  this.snackBarService.errorMessage(this.errorMessage);

                }
            );*/
    }

}
