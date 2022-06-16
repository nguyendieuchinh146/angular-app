import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { APP_CONFIG } from 'src/app/shared/common/config';

@Injectable()
export class ProductService {
    constructor(private http: HttpClient) { }

    getProducts() {
        return this.http.get<any>(`${APP_CONFIG.BASE_API_LINK.BASE}/products/list.php`);
    }
    createProduct(data:any) {
        console.log(data)
        return this.http.post<any>(`${APP_CONFIG.BASE_API_LINK.BASE}/products/create.php`, data);
    }
}
