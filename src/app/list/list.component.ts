import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';
import * as data from '../Json/champions.json';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listHero: any = (data as any).default;
  hero: Hero;
  startIndex = 0;
  endIndex = 0;
  totalData = 10;
  currentPage = 1;
  listCurrentPaging: [];
  totalPage = [];

  constructor(public router: Router, public activateRoute: ActivatedRoute, ) { }

  ngOnInit() {
    //Init list view in 1 page
    this.currentPage = this.activateRoute.snapshot.params["index"];
    this.initPage();
    //Get total page
    for (let i = 1; i <= Math.ceil(this.listHero.length / this.totalData); i++) {
      this.totalPage.push(i);
    }
  }

  gotoDetail(id: any) {
    this.router.navigate(['hero/detail/', id]);
  }

  initPage() {
    //Data will view in 1 page
    this.endIndex = this.currentPage * this.totalData;
    this.startIndex = this.endIndex - this.totalData;
    this.listCurrentPaging = this.listHero.slice(this.startIndex, this.endIndex);
  }

  updatePaging(index: any) {
    this.router.navigate(['hero/list/page/', index]);
    this.currentPage = index;
    this.initPage();
  }
}
