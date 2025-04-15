import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.css'
})
export class DoctorsComponent implements OnInit {
  doctors: any[] = [];
  newDoctor: any = {};
  editDoctor: any = null;
  editData: any = {};

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.fetchDoctors();
  }

  fetchDoctors() {
    this.api.getDoctors().subscribe(data => this.doctors = data);
  }

  addDoctor() {
    this.api.addDoctor(this.newDoctor).subscribe(() => {
      this.newDoctor = {};
      this.fetchDoctors();
    });
  }

  startEdit(doctor: any) {
    this.editDoctor = doctor._id;
    this.editData = { ...doctor };
  }

  saveEdit(doctorId: string) {
    this.api.updateDoctor(doctorId, this.editData).subscribe(() => {
      this.editDoctor = null;
      this.fetchDoctors();
    });
  }

  cancelEdit() {
    this.editDoctor = null;
  }

  deleteDoctor(doctorId: string) {
    this.api.deleteDoctor(doctorId).subscribe(() => this.fetchDoctors());
  }
}
