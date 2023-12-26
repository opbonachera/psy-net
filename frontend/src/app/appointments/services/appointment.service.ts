import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { map } from "rxjs";
import { environment } from "src/environments/environments";
import { Appointment } from "../interfaces/appointment.interface";

@Injectable({
    providedIn:'root'
})

export class AppointmentService{
    private httpClient = inject(HttpClient);

    public getAppointmentById(id:string){
        const url = `${ environment.baseUrl }appointments/get-by-id`;
        const body = { appId: id.toString() };
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization',`Bearer ${ token }`);

        return this.httpClient.post<Appointment>(url,body,{headers});

    }
    public getAppointmentList(){
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization',`Bearer ${ token }`);
        const url = `${ environment.baseUrl }appointments/list`;
        
        return this.httpClient.get<Appointment[]>(url, { headers });
    }

    public createAppointment<Appointment>( message:string, date: string, state:string){
       const url = `${ environment.baseUrl }appointments/create`;
       const body = { message: message, date:date, state:"pending" };
       const token = localStorage.getItem('token');
       const headers = new HttpHeaders().set('Authorization',`Bearer ${ token }`);

       return this.httpClient.post<Appointment>(url, body, { headers });
    }

    public removeAppointment(){
        
    }

    public modifyAppointment(date:string){
        const url = `${ environment.baseUrl }appointments/update`;
        const body = { date };
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization',`Bearer ${ token }`)

        return this.httpClient.patch(url, body, { headers });
    }
}