import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-medical-records',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './medical-records.component.html',
  styleUrl: './medical-records.component.css'
})
export class MedicalRecordsComponent implements OnInit {
  records: any[] = [];
  newRecord: any = {
    patient_id: '',
    doctor_id: '',
    diagnosis: '',
    treatment: '',
    prescription: '',
    visit_date: ''
  };
  editRecord: any = null;
  editData: any = {
    patient_id: '',
    doctor_id: '',
    diagnosis: '',
    treatment: '',
    prescription: '',
    visit_date: ''
  };
  patients: any[] = [];
  doctors: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.fetchRecords();
    this.fetchPatients();
    this.fetchDoctors();
  }

  fetchRecords() {
    this.api.getMedicalRecords().subscribe(data => this.records = data);
  }

  fetchPatients() {
    this.api.getPatients().subscribe(data => this.patients = data);
  }

  fetchDoctors() {
    this.api.getDoctors().subscribe(data => this.doctors = data);
  }

  addRecord() {
    // Only send fields the backend expects
    const payload = {
      patient_id: this.newRecord.patient_id,
      doctor_id: this.newRecord.doctor_id,
      diagnosis: this.newRecord.diagnosis,
      treatment: this.newRecord.treatment,
      prescription: this.newRecord.prescription,
      visit_date: this.newRecord.visit_date
    };
    this.api.addMedicalRecord(payload).subscribe(() => {
      this.newRecord = {
        patient_id: '',
        doctor_id: '',
        diagnosis: '',
        treatment: '',
        prescription: '',
        visit_date: ''
      };
      this.fetchRecords();
    });
  }

  startEdit(record: any) {
    this.editRecord = record._id;
    this.editData = {
      patient_id: record.patient_id,
      doctor_id: record.doctor_id,
      diagnosis: record.diagnosis,
      treatment: record.treatment,
      prescription: record.prescription,
      visit_date: record.visit_date ? record.visit_date.substring(0, 10) : ''
    };
  }

  saveEdit(recordId: string) {
    const payload = {
      patient_id: this.editData.patient_id,
      doctor_id: this.editData.doctor_id,
      diagnosis: this.editData.diagnosis,
      treatment: this.editData.treatment,
      prescription: this.editData.prescription,
      visit_date: this.editData.visit_date
    };
    this.api.updateMedicalRecord(recordId, payload).subscribe(() => {
      this.editRecord = null;
      this.fetchRecords();
    });
  }

  cancelEdit() {
    this.editRecord = null;
  }

  deleteRecord(recordId: string) {
    this.api.deleteMedicalRecord(recordId).subscribe(() => this.fetchRecords());
  }

  getPatientName(id: string): string {
    const patient = this.patients.find(p => p._id === id);
    return patient ? `${patient.first_name} ${patient.last_name}` : id;
  }

  getDoctorName(id: string): string {
    const doctor = this.doctors.find(d => d._id === id);
    return doctor ? `${doctor.first_name} ${doctor.last_name} (${doctor.specialization})` : id;
  }
}
