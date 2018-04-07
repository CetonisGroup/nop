import {
    Injectable,
    ComponentFactoryResolver,
    Component,
    NgModule,
    Compiler,
    ComponentFactory,
    OnInit
} from '@angular/core';
import { Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

@Injectable()
export class ApiService {
    path = 'https://us-central1-nop-service.cloudfunctions.net/function-1/'
    constructor(private http: Http) { }

    listUpdates(id) {
        this.http.get(this.path + 'ListUpdate', { params: { user_id: id } });
    }
    createUpdate(update) {
        this.http.post(this.path + 'CreateUpdate', update);
    }

}
