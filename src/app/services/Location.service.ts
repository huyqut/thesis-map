import { Injectable } from '@angular/core';
import { RestClient } from 'app/utils/RestClient';
import { Observable } from 'rxjs/Observable';
import { ResponseContentType } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Location } from 'app/models/Location';
import { Data } from 'app/models/Data';

@Injectable()
export class LocationService {
    constructor(private api: RestClient) {}

    public getTopLocations(size: number): Observable<Data<Location[]>> {
        return this.api
            .to('/location')
            .setParams({size: size})
            .setResponseType(ResponseContentType.Json)
            .get()
            .map(response => response.json())
            .catch(this.handleException);
    }

    public handleException(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
};