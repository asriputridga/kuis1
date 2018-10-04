import { Component, OnInit } from '@angular/core';
import { Mahasiswa } from '../shared/mahasiswa';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
form = 'FORM DATA MAHASISWA';
data = 'DATA MAHASISWA';
daftarMahasiswa: Mahasiswa[] = [];
nim = '';
nama = '';
kelas = '';
mahasiswa;

  constructor() { }

  ngOnInit() {
  }

  tambahMahasiswa(){
    this.mahasiswa = new Mahasiswa(this.nim, this.nama, this.kelas);
    this.daftarMahasiswa.push(this.mahasiswa);
    this.nim = '';
    this.nama = '';
    this.kelas = '';
  }

}
