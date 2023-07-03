import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainserviceService {
  private postsUrl = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<Object> {
    return this.http.get(this.postsUrl + 'posts'); /*.pipe(
            map(data => {

                console.log(data);
                return data;
            }),
        )*/
  }

  getOnePost(id: number): Observable<Object> {
    return this.http.get(this.postsUrl + 'posts/' + id);
  }
}
