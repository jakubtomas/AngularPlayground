import {Component, OnInit} from '@angular/core';
import {User} from "../../../entities/user";
import {AbstractControl, UntypedFormControl, UntypedFormGroup, ValidationErrors, Validators} from "@angular/forms";

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


    registerForm = new UntypedFormGroup({
        username: new UntypedFormControl('',
            [Validators.required, Validators.minLength(3)]
        ),
        email: new UntypedFormControl('',
            [Validators.required,
                Validators.email,
                Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]
        ),
        /* password: new FormControl('', [Validators.required,
           this.passwordValidator()]),
        */
        password: new UntypedFormControl('', Validators.required),
        password2: new UntypedFormControl('', Validators.required)
    }, this.passwordsMatchValidator);

    hide = true;
    passwordMessage = "";

    constructor() {
    }

    ngOnInit(): void {

    }


    get username(): UntypedFormControl {
        return this.registerForm.get('username') as UntypedFormControl;
    }

    get email(): UntypedFormControl {
        return this.registerForm.get('email') as UntypedFormControl;
    }

    get password(): UntypedFormControl {
        return this.registerForm.get('password') as UntypedFormControl;
    }

    get password2(): UntypedFormControl {
        return this.registerForm.get('password2') as UntypedFormControl;
    }

    onSubmit() {
        const user = new User(
            this.username.value,
            this.password.value,
            this.email.value,
            undefined,
            undefined,
        );
        /*this.usersService.register(user).subscribe(u => {
          this.snackbarService.successMessage(
        },error=>{
          this.snackbarService.errorMessage("Login or email already exists")
              'User ' + user.username + ' successfully registered, you can log in now'
          );
          this.router.navigateByUrl("/login");
        })*/
    }

    getErrors(model: AbstractControl) {
        return JSON.stringify(model.errors);
    }

    /*passwordValidator(): ValidatorFn {
      return (model: FormControl): ValidationErrors => {
        const result = zxcvbn(model.value);

        this.passwordMessage = "Password strength: " + result.score + "/4 " +
            (result.score < 3 ? "- must be 3 or 4, ": "") +
            result.feedback.warning + ' ' + result.feedback.suggestions +
            ", crackable in " + result.crack_times_display.offline_slow_hashing_1e4_per_second;
        return result.score > 2 ? null : { weakPassword: this.passwordMessage };
      }
    }*/

    passwordsMatchValidator(model: UntypedFormGroup): ValidationErrors {

        const password = model.get('password');
        const password2 = model.get('password2');
        if (password.value === password2.value) {
            password2.setErrors(null);
            return null;
        } else {
            const error = {differentPasswords: 'Passwords do not match'};
            password2.setErrors(error);
            return error;
        }
    }
}
