import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sortOption: string;
  searchText: string;

  constructor() {
    this.sortOption = "product_name|asc";
  }

  ngOnInit() {}
}