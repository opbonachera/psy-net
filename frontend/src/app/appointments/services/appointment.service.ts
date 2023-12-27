import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { map, Observable } from "rxjs";
import { environment } from "src/environments/environments";
import { Appointment } from "../interfaces/appointment.interface";

@Injectable({
    providedIn:'root'
})

export class AppointmentService{
    private httpClient = inject(HttpClient);

    public getHeadersAndSetAuthorization = () =>{
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization',`Bearer ${ token }`);

        return headers;
    }

    public getAppointmentById(id:string){
        const url = `${ environment.baseUrl }appointments/get-by-id`;
        const body = { appId: id };
        const headers = this.getHeadersAndSetAuthorization();
        
        return this.httpClient.post<Appointment>(url,body,{ headers });

    }
    public getAppointmentList(): Observable<Appointment[]>{
        const headers = this.getHeadersAndSetAuthorization();
        const url = `${ environment.baseUrl }appointments/list`;
        
        return this.httpClient.get<Appointment[]>(url, { headers });
    }

    public cancelAppointment(id:string):Observable<Appointment>{
        return this.modifyAppointment(id, "cancelled");
    }

    public createAppointment( message:string, date: string, state:string):Observable<Appointment>{
       const url = `${ environment.baseUrl }appointments/create`;
       const body = { message: message, date:date, state:"pending" };
       const headers = this.getHeadersAndSetAuthorization();
       
       return this.httpClient.post<Appointment>(url, body, { headers });
    }

    public removeAppointment(){
        
    }

    public modifyAppointment<Appointment>(id:string, state:string, date?:string):Observable<Appointment>{
        console.log(id, state, date)
        const url = `${ environment.baseUrl }appointments/update`;
        const body = { appId: id, date: date, status: state };
        const headers = this.getHeadersAndSetAuthorization();

        return this.httpClient.patch<Appointment>(url, body, { headers });
    }
}