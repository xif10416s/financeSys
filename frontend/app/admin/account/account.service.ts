import { Injectable ,OpaqueToken} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { AdminUser }    from './adminUser.model';
import { Config,COMMON_CONFIG } from '../../common/config/app-config';


@Injectable()
export class AccountService {

    constructor(private http:Http) {
    }

    addAddminUser(user:AdminUser):Observable<Response> {

        let body = JSON.stringify(user);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        console.log(body + "---------")
        return this.http.post("spring/admin/addAdminUser", body, options);
    }

}