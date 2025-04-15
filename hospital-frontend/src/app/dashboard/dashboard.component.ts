import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  totalPatients = 0;
  totalDoctors = 0;
  totalAppointments = 0;
  totalAdmissions = 0;
  totalBillings = 0;
  errorMsg = '';

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getDashboardSummary().subscribe({
      next: (data) => {
        this.totalPatients = data.totalPatients || 0;
        this.totalDoctors = data.totalDoctors || 0;
        this.totalAppointments = data.totalAppointments || 0;
        this.totalAdmissions = data.totalAdmissions || 0;
        this.totalBillings = data.totalBillings || 0;
      },
      error: (err) => {
        this.errorMsg = 'Could not load dashboard summary.';
      }
    });
  }
}

