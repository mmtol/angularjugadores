import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export default class ServiceFutbol
{
    constructor(private _http:HttpClient){}
}