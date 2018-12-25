import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-slot',
  templateUrl: './page-slot.component.html',
  styleUrls: ['./page-slot.component.css']
})
export class PageSlotComponent implements OnInit {

  jadwalStatistika = [
    { 'kode': 'p1', 'hari': 'Rabu', 'jam': '13.30 - 15.00', 'lab': 'Jaringan' },
    { 'kode': 'p2', 'hari': 'Rabu', 'jam': '13.30 - 15.00', 'lab': 'Basis Data' },
    { 'kode': 'p3', 'hari': 'Kamis', 'jam': '13.30 - 15.00', 'lab': 'Jaringan' }
  ];

  jadwalBasisdata = [
    { 'kode': 'p1', 'hari': 'Rabu', 'jam': '13.30 - 15.00', 'lab': 'Jaringan' },
    { 'kode': 'p2', 'hari': 'Rabu', 'jam': '13.30 - 15.00', 'lab': 'Basis Data' },
    { 'kode': 'p3', 'hari': 'Kamis', 'jam': '13.30 - 15.00', 'lab': 'Jaringan' }
  ];

  jadwalSdata = [
    { 'kode': 'p1', 'hari': 'Rabu', 'jam': '13.30 - 15.00', 'lab': 'Jaringan' },
    { 'kode': 'p2', 'hari': 'Rabu', 'jam': '13.30 - 15.00', 'lab': 'Basis Data' },
    { 'kode': 'p3', 'hari': 'Kamis', 'jam': '13.30 - 15.00', 'lab': 'Jaringan' }
  ];

  jadwalKDJK = [
    { 'kode': 'p1', 'hari': 'Senin', 'jam': '13.30 - 15.00', 'lab': 'Jaringan' },
    { 'kode': 'p2', 'hari': 'Minggu', 'jam': '13.30 - 15.00', 'lab': 'AI' },
    { 'kode': 'p3', 'hari': 'Lebaran', 'jam': '13.30 - 15.00', 'lab': 'Riset' }
  ];

  ambil = [
    { 'nama': 'Statistika', 'jadwal': [this.jadwalStatistika] },
    { 'nama': 'Struktur Data', 'jadwal': [this.jadwalSdata] },
    { 'nama': 'Basis Data', 'jadwal': [this.jadwalBasisdata] },
    { 'nama': 'Keamanan Data dan Jaringan', 'jadwal': [this.jadwalKDJK] }
  ];

  data = 'apa hayo';

  ambilModal = [];

  private pilihan_notif = '';

  constructor() { }

  ngOnInit() {
  }

  pesan(param: string) {
    for (const data of this.ambil) {
      console.log(param, data.nama);
      if (data.nama === param) {
        this.ambilModal = data.jadwal[0];
        break;
      }
    }
  }

  pilih(kode: string) {
    for (const data of this.ambilModal) {
      if (data.kode === kode) {
        this.pilihan_notif = 'Kamu memilih : lab ' + data.lab + ' hari ' + data.hari + ', ' + data.jam;
        break;
      }
    }
  }

  hasil() {
    window.alert(this.pilihan_notif);
  }

}
