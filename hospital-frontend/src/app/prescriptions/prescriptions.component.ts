import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-prescriptions',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './prescriptions.component.html',
  styleUrl: './prescriptions.component.css'
})
export class PrescriptionsComponent implements OnInit {
  prescriptions: any[] = [];
  newPrescription: any = {};
  editPrescription: any = null;
  editData: any = {};
  patients: any[] = [];
  doctors: any[] = [];
  drugs: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.fetchPrescriptions();
    this.fetchPatients();
    this.fetchDoctors();
    this.fetchDrugs();
  }

  fetchPrescriptions() {
    this.api.getPrescriptions().subscribe(data => this.prescriptions = data);
  }

  fetchPatients() {
    this.api.getPatients().subscribe(data => this.patients = data);
  }

  fetchDoctors() {
    this.api.getDoctors().subscribe(data => this.doctors = data);
  }

  fetchDrugs() {
    this.api.getDrugs().subscribe(data => this.drugs = data);
  }

  addPrescription() {
    const payload = {
      ...this.newPrescription,
      prescription_id: Number(this.newPrescription.prescription_id)
      // patient_id, doctor_id, drug_id are sent as-is (string ObjectIds)
    };
    this.api.addPrescription(payload).subscribe(() => {
      this.newPrescription = {};
      this.fetchPrescriptions();
    });
  }

  startEdit(prescription: any) {
    this.editPrescription = prescription._id;
    this.editData = { ...prescription };
  }

  saveEdit(prescriptionId: string) {
    const payload = {
      ...this.editData,
      prescription_id: Number(this.editData.prescription_id),
      patient_id: Number(this.editData.patient_id),
      doctor_id: Number(this.editData.doctor_id),
      drug_id: Number(this.editData.drug_id)
    };
    this.api.updatePrescription(prescriptionId, payload).subscribe(() => {
      this.editPrescription = null;
      this.fetchPrescriptions();
    });
  }

  cancelEdit() {
    this.editPrescription = null;
  }

  deletePrescription(prescriptionId: string) {
    this.api.deletePrescription(prescriptionId).subscribe(() => this.fetchPrescriptions());
  }
}
