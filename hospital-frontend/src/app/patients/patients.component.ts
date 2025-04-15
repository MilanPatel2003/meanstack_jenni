import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-patients',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.css'
})
export class PatientsComponent implements OnInit {
  patients: any[] = [];
  newPatient: any = {};
  editPatient: any = null;
  editData: any = {};

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.fetchPatients();
  }

  fetchPatients() {
    this.api.getPatients().subscribe(data => this.patients = data);
  }

  addPatient() {
    console.log('Submitting new patient:', this.newPatient);
    this.api.addPatient(this.newPatient).subscribe(() => {
      this.newPatient = {};
      this.fetchPatients();
    });
  }

  startEdit(patient: any) {
    this.editPatient = patient._id;
    this.editData = { ...patient };
  }

  saveEdit(patientId: string) {
    this.api.updatePatient(patientId, this.editData).subscribe(() => {
      this.editPatient = null;
      this.fetchPatients();
    });
  }

  cancelEdit() {
    this.editPatient = null;
  }

  deletePatient(patientId: string) {
    this.api.deletePatient(patientId).subscribe(() => this.fetchPatients());
  }
}

