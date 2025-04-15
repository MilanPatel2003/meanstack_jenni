import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admissions',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admissions.component.html',
  styleUrl: './admissions.component.css'
})
export class AdmissionsComponent implements OnInit {
  admissions: any[] = [];
  newAdmission: any = {};
  editAdmission: any = null;
  editData: any = {};
  patients: any[] = [];
  rooms: any[] = [];
  staff: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.fetchAdmissions();
    this.fetchPatients();
    this.fetchRooms();
    this.fetchStaff();
  }

  fetchAdmissions() {
    this.api.getAdmissions().subscribe(data => this.admissions = data);
  }

  fetchPatients() {
    this.api.getPatients().subscribe(data => this.patients = data);
  }

  fetchRooms() {
    this.api.getRooms().subscribe(data => this.rooms = data);
  }

  fetchStaff() {
    this.api.getStaff().subscribe(data => this.staff = data);
  }

  addAdmission() {
    this.api.addAdmission(this.newAdmission).subscribe(() => {
      this.newAdmission = {};
      this.fetchAdmissions();
    });
  }

  startEdit(admission: any) {
    this.editAdmission = admission._id;
    this.editData = { ...admission };
  }

  saveEdit(admissionId: string) {
    this.api.updateAdmission(admissionId, this.editData).subscribe(() => {
      this.editAdmission = null;
      this.fetchAdmissions();
    });
  }

  cancelEdit() {
    this.editAdmission = null;
  }

  deleteAdmission(admissionId: string) {
    this.api.deleteAdmission(admissionId).subscribe(() => this.fetchAdmissions());
  }

  getPatientName(id: string): string {
    const patient = this.patients.find(p => p._id === id);
    return patient ? `${patient.first_name} ${patient.last_name}` : id;
  }

  getRoomDetails(id: string): string {
    const room = this.rooms.find(r => r._id === id);
    return room ? `${room.room_number} (${room.room_type})` : id;
  }

  getStaffName(id: string): string {
    const staffMember = this.staff.find(s => s._id === id);
    return staffMember ? `${staffMember.first_name} ${staffMember.last_name} (${staffMember.role})` : id;
  }
}

