import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { authInterface } from '@sharedInterface/authInterface';

// SHOULD COME FIRST OTHERWISE AN ERROR WILL OCCUR
// ** ERROR TO OCCUR IS Decorators are not valid here.
const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type':'application/json',
  })
};
@Injectable({
  providedIn: 'root'
})
export class BaseRequestService {
  constructor(private httpClient: HttpClient) { }

  //VARIABLES DECLARATION
  _error;

  public addResponseCall(api_info:authInterface,data?:any,){
    let response;
    return response = this.httpClient.post(
      api_info.api_url,
      data, 
      httpOptions
    ).pipe(catchError(err=>this.handleError(err)));
  }

  public editResponseCall(api_info:authInterface,data?:any,){
    let response;
    return response = this.httpClient.put(
      api_info.api_url,
      data, 
      httpOptions
    ).pipe(catchError(err=>this.handleError(err)));
  }

  public deleteResponseCall(api_info:authInterface){
    let response;
    return response = this.httpClient.delete(
      api_info.api_url,
    ).pipe(catchError(err=>this.handleError(err)));
  }

  public getResponseCall(api_info:authInterface):Observable<any>{
    let response;
    response = this.httpClient.get<any>(
      api_info.api_url
    ).pipe(catchError(err=>this.handleError(err)));
    return response;
  }

  public getResponseDetailViaIDCall(api_info:authInterface):Observable<any>{
    let response;
    response = this.httpClient.get<any>(
      api_info.api_url
    ).pipe(catchError(err=>this.handleError(err)));
    return response;
  }

  handleError(error: HttpErrorResponse){
    console.log(error);
    if(error.error instanceof ErrorEvent){
      console.error('An error occurred', error.error.message)
    }
    else{
      this._error = {errorMsg:error.message, status:error.status};
      console.log("An error occured : " + error.message);
      return throwError(this._error);       
    }
  }

}
