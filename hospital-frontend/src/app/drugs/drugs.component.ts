import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-drugs',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './drugs.component.html',
  styleUrl: './drugs.component.css'
})
export class DrugsComponent implements OnInit {
  drugs: any[] = [];
  newDrug: any = {};
  editDrug: any = null;
  editData: any = {};

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.fetchDrugs();
  }

  fetchDrugs() {
    this.api.getDrugs().subscribe(data => this.drugs = data);
  }

  addDrug() {
    const payload = {
      ...this.newDrug,
      drug_id: Number(this.newDrug.drug_id),
      price: Number(this.newDrug.price),
      stock_quantity: Number(this.newDrug.stock_quantity)
    };
    this.api.addDrug(payload).subscribe(() => {
      this.newDrug = {};
      this.fetchDrugs();
    });
  }

  startEdit(drug: any) {
    this.editDrug = drug._id;
    this.editData = { ...drug };
  }

  saveEdit(drugId: string) {
    const payload = {
      ...this.editData,
      drug_id: Number(this.editData.drug_id),
      price: Number(this.editData.price),
      stock_quantity: Number(this.editData.stock_quantity)
    };
    this.api.updateDrug(drugId, payload).subscribe(() => {
      this.editDrug = null;
      this.fetchDrugs();
    });
  }

  cancelEdit() {
    this.editDrug = null;
  }

  deleteDrug(drugId: string) {
    this.api.deleteDrug(drugId).subscribe(() => this.fetchDrugs());
  }
}
