import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { observable, from, Observable } from 'rxjs'
import { GLOBAL } from './GLOBAL'


@Injectable({
  providedIn: 'root'
})
export class TweetService {

  public url

  constructor(
    private _http: HttpClient
  ) { 
    this.url = GLOBAL.url
   }

  post_publicar(tweet): Observable<any> {
    let headers = new HttpHeaders().set('content-type', 'application/json')
    return this._http.post(this.url + 'tweet/publicar', tweet, { headers: headers })
  }

  get_tweets(id): Observable<any> {
    let headers = new HttpHeaders().set('content-type', 'application/json')
    return this._http.get(this.url + 'tweet/tweets_seguidos_2/' + id, { headers: headers })
  }

  get_mis_tweets(id): Observable<any> {
    let headers = new HttpHeaders().set('content-type', 'application/json')
    return this._http.get(this.url + 'tweet/get_tweets/' + id, { headers: headers })
  }

  get_follow(id): Observable<any> {
    let headers = new HttpHeaders().set('content-type', 'application/json')
    return this._http.get(this.url + 'usuario/seguidos/' + id, { headers: headers })
  }

  get_seguidores(id): Observable<any> {
    let headers = new HttpHeaders().set('content-type', 'application/json')
    return this._http.get(this.url + 'usuario/seguidores/' + id, { headers: headers })
  }

  get_count_seguidores(id): Observable<any> {
    let headers = new HttpHeaders().set('content-type', 'application/json')
    return this._http.get(this.url + 'usuario/count_seguidores/' + id, { headers: headers })
  }

  get_count_follow(id): Observable<any> {
    let headers = new HttpHeaders().set('content-type', 'application/json')
    return this._http.get(this.url + 'usuario/count_seguidos/' + id, { headers: headers })
  }



}
