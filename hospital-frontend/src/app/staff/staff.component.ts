import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-staff',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './staff.component.html',
  styleUrl: './staff.component.css'
})
export class StaffComponent implements OnInit {
  staff: any[] = [];
  newStaff: any = {};
  editStaff: any = null;
  editData: any = {};

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.fetchStaff();
  }

  fetchStaff() {
    this.api.getStaff().subscribe(data => this.staff = data);
  }

  addStaff() {
    this.api.addStaff(this.newStaff).subscribe(() => {
      this.newStaff = {};
      this.fetchStaff();
    });
  }

  startEdit(staffMember: any) {
    this.editStaff = staffMember._id;
    this.editData = { ...staffMember };
  }

  saveEdit(staffId: string) {
    this.api.updateStaff(staffId, this.editData).subscribe(() => {
      this.editStaff = null;
      this.fetchStaff();
    });
  }

  cancelEdit() {
    this.editStaff = null;
  }

  deleteStaff(staffId: string) {
    this.api.deleteStaff(staffId).subscribe(() => this.fetchStaff());
  }
}
