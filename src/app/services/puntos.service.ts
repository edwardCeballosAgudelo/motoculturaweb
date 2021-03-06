import { RequestOptions, Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class PuntosService {

  headers: Headers;
  headersPost: Headers;
  options: RequestOptions;

  constructor(public http: Http) {
    console.log('Hello ProductServicesProvider Provider');
  }

  public getPuntosAccidentes() {
    this.headersPost = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*'
    });

    const optionspost = new RequestOptions({
      headers: this.headersPost
    });

    return new Promise((resolve, reject) => {
      this.http.get('https://api-rest-edward.herokuapp.com/api/punto', optionspost)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          resolve(err);
        });
    });
  }

  public newPuntoAccidente(postParams) {
    const body = 'nombre=' + postParams.nombre +
     '&descripcion=' + postParams.descripcion +
     '&longitud=' + postParams.longitud +
     '&latitud=' + postParams.latitud +
     '&distancia=' + postParams.distancia;

    this.headersPost = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*'
    });

    const optionspost = new RequestOptions({
      headers: this.headersPost
    });

    return new Promise((resolve, reject) => {
      this.http.post('https://api-rest-edward.herokuapp.com/api/punto', body, optionspost)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          resolve(err);
        });
    });
  }

  public deletePuntoAccidente(id) {
    this.headersPost = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*'
    });

    const optionspost = new RequestOptions({
      headers: this.headersPost
    });

    return new Promise((resolve, reject) => {
      this.http.delete('https://api-rest-edward.herokuapp.com/api/punto/' + id, optionspost)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          resolve(err);
        });
    });
  }

  public updatePuntoAccidente(postParams) {
    const body = 'nombre=' + postParams.name +
     '&descripcion=' + postParams.descripcion +
     '&longitud=' + postParams.longitud +
     '&latitud=' + postParams.latitud +
     '&distancia=' + postParams.distancia;

    this.headersPost = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*'
    });

    const optionspost = new RequestOptions({
      headers: this.headersPost
    });

    return new Promise((resolve, reject) => {
      this.http.put('https://api-rest-edward.herokuapp.com/api/punto/' + postParams.id, body, optionspost)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          resolve(err);
        });
    });
  }
}
