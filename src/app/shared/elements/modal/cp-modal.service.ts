import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class ModalService {
    modalServiceData: any[] = [];
    dataModal : {[k: string]: any} = {};

    constructor(private http: HttpClient) {

    }

    getModalData(modalIdVal: string): Observable<any> {
        //return this.modalServiceData.filter((v: any) => v.modalId == modalIdVal);

        return new Observable<any>((observer) => {
            const res = this.dataModal[modalIdVal];
            observer.next(res);
            observer.complete();
        }).pipe(
            map((res: any) => {
                return res;
            })
        );
    }
    setModalData(modalIdVal:string, data: any){
        //this.modalServiceData =  this.modalServiceData.filter((v: any) => v.modalId != modalIdVal);
        //this.modalServiceData.push(data)

        //object key variable
        this.dataModal[modalIdVal] = data;
    }
    clearModalData(modalIdVal:string) {
        //this.modalServiceData =  this.modalServiceData.filter((v: any) => v.modalId != modalIdVal);

        //object key variable
        delete this.dataModal[modalIdVal];
    }
}
