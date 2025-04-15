import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit {
  rooms: any[] = [];
  newRoom: any = {};
  editRoom: any = null;
  editData: any = {};

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.fetchRooms();
  }

  fetchRooms() {
    this.api.getRooms().subscribe(data => this.rooms = data);
  }

  addRoom() {
    this.api.addRoom(this.newRoom).subscribe(() => {
      this.newRoom = {};
      this.fetchRooms();
    });
  }

  startEdit(room: any) {
    this.editRoom = room._id;
    this.editData = { ...room };
  }

  saveEdit(roomId: string) {
    this.api.updateRoom(roomId, this.editData).subscribe(() => {
      this.editRoom = null;
      this.fetchRooms();
    });
  }

  cancelEdit() {
    this.editRoom = null;
  }

  deleteRoom(roomId: string) {
    this.api.deleteRoom(roomId).subscribe(() => this.fetchRooms());
  }
}
