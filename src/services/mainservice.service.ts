import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class MainserviceService {


    private postsUrl = "https://jsonplaceholder.typicode.com/";

    constructor(private http: HttpClient) {
    }


    /*getAllPost(): Observable<any> {
        return this.http.get(this.postsUrl+"posts")/!*.pipe(
            map(data => {

                console.log(data);
                return data;
            }),
        )*!/
    }*/

}
