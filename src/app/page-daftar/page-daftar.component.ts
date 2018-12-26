import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-daftar',
  templateUrl: './page-daftar.component.html',
  styleUrls: ['./page-daftar.component.css']
})
export class PageDaftarComponent implements OnInit {

  public praktikum = [
    { 'kode': 'p1s1', 'nama': 'Dasar-dasar Pemrograman', 'semester': 1 },
    { 'kode': 'p2s1', 'nama': 'Logika Informatika', 'semester': 1 },
    { 'kode': 'p3s1', 'nama': 'Dasar Sistem Komputer', 'semester': 1 },
    { 'kode': 'p1s2', 'nama': 'Algoritma Pemrograman', 'semester': 2 },
    { 'kode': 'p2s2', 'nama': 'Pemrograman Web', 'semester': 2 },
    { 'kode': 'p3s2', 'nama': 'Matematika Diskrit', 'semester': 2 },
    { 'kode': 'p1s3', 'nama': 'Struktur Data', 'semester': 3 },
    { 'kode': 'p2s3', 'nama': 'Basis Data', 'semester': 3 },
    { 'kode': 'p3s3', 'nama': 'Statistika', 'semester': 3 },
    { 'kode': 'p4s3', 'nama': 'Komunikasi Data dan Jaringan', 'semester': 3 },
    { 'kode': 'p1s4', 'nama': 'Kecerdasan Buatan', 'semester': 4 },
    { 'kode': 'p2s4', 'nama': 'Strategi Algoritma', 'semester': 4 },
    { 'kode': 'p3s4', 'nama': 'Sistem Operasi', 'semester': 4 },
    { 'kode': 'p4s4', 'nama': 'Grafika Komputer', 'semester': 4 },
    { 'kode': 'p1s5', 'nama': 'Pemrograman Mobile', 'semester': 5 },
    { 'kode': 'p2s5', 'nama': 'Keamanan Komputer', 'semester': 5 },
    { 'kode': 'p1s6', 'nama': 'Pemrograman Web Dinamis', 'semester': 6 },
    { 'kode': 'p2s6', 'nama': 'Kriptografi', 'semester': 6 },
    { 'kode': 'p1s7', 'nama': 'Unknown', 'semester': 7 },
    { 'kode': 'p2s7', 'nama': 'Unknown', 'semester': 7 }
  ];

  constructor() { }

  ngOnInit() {
  }

}
