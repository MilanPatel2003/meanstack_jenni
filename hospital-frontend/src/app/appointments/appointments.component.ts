import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.css'
})
export class AppointmentsComponent implements OnInit {
  appointments: any[] = [];
  newAppointment: any = {};
  editAppointment: any = null;
  editData: any = {};

  patients: any[] = [];
  doctors: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.fetchAppointments();
    this.fetchPatients();
    this.fetchDoctors();
  }

  fetchAppointments() {
    this.api.getAppointments().subscribe(data => this.appointments = data);
  }

  fetchPatients() {
    this.api.getPatients().subscribe(data => this.patients = data);
  }

  fetchDoctors() {
    this.api.getDoctors().subscribe(data => this.doctors = data);
  }

  addAppointment() {
    this.api.addAppointment(this.newAppointment).subscribe(() => {
      this.newAppointment = {};
      this.fetchAppointments();
    });
  }

  startEdit(appointment: any) {
    this.editAppointment = appointment._id;
    this.editData = { ...appointment };
  }

  saveEdit(appointmentId: string) {
    this.api.updateAppointment(appointmentId, this.editData).subscribe(() => {
      this.editAppointment = null;
      this.fetchAppointments();
    });
  }

  cancelEdit() {
    this.editAppointment = null;
  }

  deleteAppointment(appointmentId: string) {
    this.api.deleteAppointment(appointmentId).subscribe(() => this.fetchAppointments());
  }

  getPatientName(id: string): string {
    const patient = this.patients.find(p => p._id === id);
    return patient ? `${patient.first_name} ${patient.last_name}` : id;
  }

  getDoctorName(id: string): string {
    const doctor = this.doctors.find(d => d._id === id);
    if (!doctor) return id;
    let display = `${doctor.first_name} ${doctor.last_name}`;
    if (doctor.specialization) display += ` (${doctor.specialization})`;
    return display;
  }
}

