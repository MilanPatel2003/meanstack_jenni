import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  // Patients CRUD
  getPatients(): Observable<any> {
    return this.http.get(`${this.baseUrl}/patients`);
  }
  getPatient(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/patients/${id}`);
  }
  addPatient(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/patients`, data);
  }
  updatePatient(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/patients/${id}`, data);
  }
  deletePatient(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/patients/${id}`);
  }

  // Doctors CRUD
  getDoctors(): Observable<any> {
    return this.http.get(`${this.baseUrl}/doctors`);
  }
  getDoctor(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/doctors/${id}`);
  }
  addDoctor(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/doctors`, data);
  }
  updateDoctor(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/doctors/${id}`, data);
  }
  deleteDoctor(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/doctors/${id}`);
  }

  // Appointments CRUD
  getAppointments(): Observable<any> {
    return this.http.get(`${this.baseUrl}/appointments`);
  }
  getAppointment(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/appointments/${id}`);
  }
  addAppointment(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/appointments`, data);
  }
  updateAppointment(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/appointments/${id}`, data);
  }
  deleteAppointment(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/appointments/${id}`);
  }

  // Staff CRUD
  getStaff(): Observable<any> {
    return this.http.get(`${this.baseUrl}/staff`);
  }
  getStaffMember(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/staff/${id}`);
  }
  addStaff(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/staff`, data);
  }
  updateStaff(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/staff/${id}`, data);
  }
  deleteStaff(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/staff/${id}`);
  }

  // Rooms CRUD
  getRooms(): Observable<any> {
    return this.http.get(`${this.baseUrl}/rooms`);
  }
  getRoom(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/rooms/${id}`);
  }
  addRoom(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/rooms`, data);
  }
  updateRoom(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/rooms/${id}`, data);
  }
  deleteRoom(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/rooms/${id}`);
  }

  // Billing CRUD
  getBillings(): Observable<any> {
    return this.http.get(`${this.baseUrl}/billing`);
  }

  // Dashboard summary
  getDashboardSummary(): Observable<any> {
    return this.http.get(`${this.baseUrl}/dashboard/summary`);
  }
  getBilling(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/billing/${id}`);
  }
  addBilling(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/billing`, data);
  }
  updateBilling(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/billing/${id}`, data);
  }
  deleteBilling(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/billing/${id}`);
  }

  // Admissions CRUD
  getAdmissions(): Observable<any> {
    return this.http.get(`${this.baseUrl}/admissions`);
  }
  getAdmission(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/admissions/${id}`);
  }
  addAdmission(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/admissions`, data);
  }
  updateAdmission(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/admissions/${id}`, data);
  }
  deleteAdmission(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/admissions/${id}`);
  }

  // Medical Records CRUD
  getMedicalRecords(): Observable<any> {
    return this.http.get(`${this.baseUrl}/medicalrecords`);
  }
  getMedicalRecord(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/medicalrecords/${id}`);
  }
  addMedicalRecord(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/medicalrecords`, data);
  }
  updateMedicalRecord(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/medicalrecords/${id}`, data);
  }
  deleteMedicalRecord(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/medicalrecords/${id}`);
  }
}

