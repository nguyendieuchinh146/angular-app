import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ModalService {
    modalServiceData: any[] = [];
    dataModal : {[k: string]: any} = {};
    private sumsubLanguage = new Subject();

    private modalSource = new BehaviorSubject('');
    currentModal = this.modalSource.asObservable();

    constructor(private http: HttpClient) {

    }

    setSumsubLanguage(value: string): void{
        this.sumsubLanguage.next(value);
    }
    observeSumsubLanguage(): Observable<any>{
        return this.sumsubLanguage.asObservable();
    }

    getModalData(modalIdVal: string){
        return this.modalServiceData.filter((v: any) => v.modalId == modalIdVal);
    }
    setModalData(modalIdVal:string, data: any){
        //this.modalServiceData =  this.modalServiceData.filter((v: any) => v.modalId != modalIdVal);
        //this.modalServiceData.push(data)

        //object key variable
        this.dataModal[modalIdVal] = data;
        this.modalSource.next(data)
    }
    clearModalData(modalIdVal:string) {
        //this.modalServiceData =  this.modalServiceData.filter((v: any) => v.modalId != modalIdVal);

        //object key variable
        delete this.dataModal[modalIdVal];
    }
}
