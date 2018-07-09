import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private headers = new Headers({ "Content-Type": "application/json" });
  private options = new RequestOptions();
  private url = "http://localhost:3000";

  constructor(private http: Http) { }

  /**
   * GET request
   * @param method
   */
  get(method) {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.url}/${method}`, this.options).toPromise().then(res => {
        resolve(res.json());
      })
      .catch(err => {
        reject(err);
      })
    });
  }

  /**
   * PUT request
   * @param method 
   * @param body 
   */
  put(method, body) {
    return new Promise((resolve, reject) => {
      this.http.put(`${this.url}/${method}`, body, this.options).toPromise().then(res => {
        resolve(res.json());
      })
      .catch(err => {
        reject(err);
      })
    });
  }

  /**
   * DELETE request
   * @param method 
   */
  delete(method) {
    return new Promise((resolve, reject) => {
      this.http.delete(`${this.url}/${method}`, this.options).toPromise().then(res => {
        resolve(res.json());
      })
      .catch(err => {
        reject(err);
      })
    });
  }
}
