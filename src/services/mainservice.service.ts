import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class MainserviceService {


    private postsUrl = "https://jsonplaceholder.typicode.com/";

    constructor(private http: HttpClient) {
    }


    getAllPosts(): Observable<any> {
        return this.http.get(this.postsUrl + "posts")/*.pipe(
            map(data => {

                console.log(data);
                return data;
            }),
        )*/
    }

    getOnePost(id: number): Observable<any> {
        return this.http.get(this.postsUrl + "posts/" + id)
    }

    storeRecipes() {
        //const recipes = this.recipeService.getRecipes();
        this.http
            .put(
                'https://ng-course-recipe-book-65f10.firebaseio.com/recipes.json',
                recipes
            )
            .subscribe(response => {
                console.log(response);
            });
    }
}
