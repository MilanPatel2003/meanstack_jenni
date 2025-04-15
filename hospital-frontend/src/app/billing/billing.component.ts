import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-billing',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './billing.component.html',
  styleUrl: './billing.component.css'
})
export class BillingComponent implements OnInit {
  billings: any[] = [];
  newBilling: any = {};
  editBilling: any = null;
  editData: any = {};
  patients: any[] = [];
  appointments: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.fetchBillings();
    this.fetchPatients();
    this.fetchAppointments();
  }

  fetchBillings() {
    this.api.getBillings().subscribe(data => this.billings = data);
  }

  fetchPatients() {
    this.api.getPatients().subscribe(data => this.patients = data);
  }

  fetchAppointments() {
    this.api.getAppointments().subscribe(data => this.appointments = data);
  }

  addBilling() {
    this.api.addBilling(this.newBilling).subscribe(() => {
      this.newBilling = {};
      this.fetchBillings();
    });
  }

  startEdit(billing: any) {
    this.editBilling = billing._id;
    this.editData = { ...billing };
  }

  saveEdit(billingId: string) {
    this.api.updateBilling(billingId, this.editData).subscribe(() => {
      this.editBilling = null;
      this.fetchBillings();
    });
  }

  cancelEdit() {
    this.editBilling = null;
  }

  deleteBilling(billingId: string) {
    this.api.deleteBilling(billingId).subscribe(() => this.fetchBillings());
  }

  getPatientName(id: string): string {
    const patient = this.patients.find(p => p._id === id);
    return patient ? `${patient.first_name} ${patient.last_name}` : id;
  }

  getAppointmentDetails(id: string): string {
    const appointment = this.appointments.find(a => a._id === id);
    if (!appointment) return id;
    // Doctor name may be a reference or a string; adjust as needed
    let doctorName = appointment.doctor_name;
    if (!doctorName && appointment.doctor) {
      // If doctor is an object, combine first_name and last_name
      doctorName = `${appointment.doctor.first_name} ${appointment.doctor.last_name}`;
      if (appointment.doctor.specialization) {
        doctorName += ` (${appointment.doctor.specialization})`;
      }
    }
    return `${appointment.appointment_date} - ${appointment.appointment_time}${doctorName ? ' (' + doctorName + ')' : ''}`;
  }
}

