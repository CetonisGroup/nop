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
const PROTO_PATH = './../../nop.proto';
import { load } from 'grpc'

@Injectable()
export class ApiService {
    protoDescriptor;
    nopApi;
    client;
    constructor() {
        this.protoDescriptor = load(PROTO_PATH);
        this.nopApi = this.protoDescriptor.nop;
        this.client = new this.nopApi.NopService()
    }
}