import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-landing',
  templateUrl: './page-landing.component.html',
  styleUrls: ['./page-landing.component.css']
})
export class PageLandingComponent implements OnInit {

  berita = [
    {
      'id': 1, 'judul': 'Ramadhan Tiba',
      'deskripsi': 'Jangan lupa bawa oleh-oleh ke kampung halaman dan hati-hati dijalan. baca doa sebelum pulang'
    },
    { 'id': 2, 'judul': 'Liburan Tiga Bulan', 'deskripsi': 'Seluruh Mahasiswa diharapkan belajar ketika sudah berada di kampung halaman' },
    { 'id': 3, 'judul': 'Info Magang', 'deskripsi': 'Google membuka pendaftaran bagi mahasiswa yang ingin magang di perusahaan nya' },
    { 'id': 4, 'judul': 'Komputer Baru', 'deskripsi': 'Bagi mahasiswa yang ingin mendapatkan komputer gratis ambil di lab riset' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
