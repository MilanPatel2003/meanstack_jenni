import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent) },
  { path: 'patients', loadComponent: () => import('./patients/patients.component').then(m => m.PatientsComponent) },
  { path: 'doctors', loadComponent: () => import('./doctors/doctors.component').then(m => m.DoctorsComponent) },
  { path: 'appointments', loadComponent: () => import('./appointments/appointments.component').then(m => m.AppointmentsComponent) },
  { path: 'medical-records', loadComponent: () => import('./medical-records/medical-records.component').then(m => m.MedicalRecordsComponent) },
  { path: 'staff', loadComponent: () => import('./staff/staff.component').then(m => m.StaffComponent) },
  { path: 'billing', loadComponent: () => import('./billing/billing.component').then(m => m.BillingComponent) },
  { path: 'rooms', loadComponent: () => import('./rooms/rooms.component').then(m => m.RoomsComponent) },
  { path: 'admissions', loadComponent: () => import('./admissions/admissions.component').then(m => m.AdmissionsComponent) },
];
