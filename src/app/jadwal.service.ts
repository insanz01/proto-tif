import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JadwalService {

  constructor() { }

  getJadwal() {
    return [
      { 'id': 1, 'nama': 'Struktur Data', 'hari': 'Rabu', 'jam_awal': 3, 'jam_akhir': 4 },
      { 'id': 2, 'nama': 'Struktur Data', 'hari': 'Rabu', 'jam_awal': 4, 'jam_akhir': 5 },
      { 'id': 3, 'nama': 'Struktur Data', 'hari': 'Kamis', 'jam_awal': 1, 'jam_akhir': 2 },
      { 'id': 4, 'nama': 'Basis Data', 'hari': 'Rabu', 'jam_awal': 3, 'jam_akhir': 4 },
      { 'id': 5, 'nama': 'Basis Data', 'hari': 'Rabu', 'jam_awal': 4, 'jam_akhir': 5 },
      { 'id': 6, 'nama': 'Statistika Informatika', 'hari': 'Kamis', 'jam_awal': 1, 'jam_akhir': 2 },
    ];
  }

}
