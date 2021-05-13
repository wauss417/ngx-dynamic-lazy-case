import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
})
export class CanActiveService implements CanActivate {

    constructor() { }

    canActivate(): boolean {

        return true;
    }
    canLoad(): boolean {

      return true;
    }
}
