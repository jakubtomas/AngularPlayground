import {Component, OnInit} from '@angular/core';
//import {Auth} from "../../../../../xlearn/src/entities/auth";
import {Auth} from "../../../entities/auth"

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    hide = true;
    auth = new Auth();

    constructor() {
    }

    ngOnInit(): void {
    }


    onSubmit() {
        console.log(JSON.stringify(this.auth));
        /*this.store.dispatch(new Login(this.auth)).subscribe(() => {
          if (this.store.selectSnapshot(AuthState.userName))
            this.router.navigateByUrl(this.store.selectSnapshot(AuthState.urlAfterLogin));
        });*/
    }

}
