import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  Observable,
  of,
  shareReplay,
  tap,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private http: HttpClient) {}

  private cachedReponse: { [key: string]: { [key: string]: string }[] } = {};
  private photoError = new BehaviorSubject(false);

  getPhotos(category: string): Observable<{}[]> {
    if (this.cachedReponse[category]) {
      return of(this.cachedReponse[category]);
    }

    return this.http.get<{ url: string }[]>(`api/photos/${category}`).pipe(
      tap((response) => {
        if (!this.cachedReponse[category]) {
          this.cachedReponse[category] = response;
        }
      }),
      shareReplay(1),
      catchError((err) => {
        this.photoError.next(true);
        return of(err);
      })
    );
  }

  getPhotoErrorObservable(): Observable<boolean> {
    return this.photoError.asObservable();
  }
}
