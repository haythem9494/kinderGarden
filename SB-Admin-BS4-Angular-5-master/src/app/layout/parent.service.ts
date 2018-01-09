import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { parent } from './parent';

// Service for parents data.
@Injectable()
export class parentService {

  // We need Http to talk to a remote server.
  constructor(private _http: Http) { }

  // Get list of parents from remote server.
  readparents(): Observable<parent[]> {
    return this._http
      .get("http://localhost:1337/parents/")
      .map(res => res.json());
  }

  // Send parent data to remote server to create it.
  createparent(parent): Observable<parent> {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    console.log(parent)

    return this._http.post(
      "http://localhost:1337/parents/",
      parent,
      options
    ).map(res => res.json());
  }

  // Get a parent details from remote server.
  readOneparent(parent_id): Observable<parent> {
    return this._http
      .get("http://localhost:1337/parents/" + parent_id)
      .map(res => res.json());
  }

  // Send parent data to remote server to update it.
  updateparent(parent, id) {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.put("http://localhost:1337/parents/" + id, parent, options)
      .map(success => success.status);



    // return this._http.post(
    //   "http://localhost:1337/parents/",
    //   parent,
    //   options
    // ).map(res => res.json());
  }

  // Send parent ID to remote server to delete it.
  deleteparent(parent_id) {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    console.log(parent_id);

    return this._http.delete("http://localhost:1337/parents/" + parent_id)
      .map(res => res.json());
  }

}
