import { Injectable ,OpaqueToken} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { LoginInfo }    from './login.model';
import { Config,COMMON_CONFIG } from '../../common/config/app-config';


@Injectable()
export class LoginService {

    constructor(private http:Http) {
    }

    dologin(login:LoginInfo):Observable<Response> {

        let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
        let options = new RequestOptions({headers: headers});

        console.log(this.transformRequest(login) + "---------" + COMMON_CONFIG.baseUrl)
        return this.http.post(COMMON_CONFIG.baseUrl + "/auth/login", this.transformRequest(login), options);

    }

    transformRequest(obj) {
        var str = [];
        for (var p in obj)
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        return str.join("&");
    }
}