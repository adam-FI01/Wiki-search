import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';


interface WikipediaResponse {
  query: {
    search: {
      title: string;
      snippet: string;
      pageid: number;
    }[];
  };
}
/* interface car {
  year: number;
  color: string;
  running: boolean;
  make: {
    name: string;
    dateCreated: number;
  }
}

const observable = new Observable<car>((observer) => {
  observer.next({
    year: 2000,
    color: 'red',
    running: true,
    make: {
      name: 'chevy',
      dateCreated: 1950
    }
  });
}).pipe(
  map(x => x?.make?.name)
)

observable.subscribe(value => {
  console.log(value)
}) */



@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private http: HttpClient) { }

  search(term: string) {
    return this.http.get<WikipediaResponse>('https://en.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*'
      }
    }).pipe(
      map(x => x?.query?.search)
    )
  }
}

