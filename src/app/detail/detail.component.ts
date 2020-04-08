import { Component, OnInit } from '@angular/core';
import { Hero, Stats, Sprite } from '../models/hero';
import * as data from '../Json/champions.json';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  hero: Hero;
  list: any = (data as any).default;
  stats: Stats;
  sprite: Sprite;
  tags: [];
  id: any;
  constructor(public router: Router, public activateRoute: ActivatedRoute) {
  }
  ngOnInit() {
    this.id = this.activateRoute.snapshot.params["id"];
    this.list.forEach(item => {
      if (item.id == this.id) {
        this.stats = item.stats;
        this.sprite = item.sprite;
        this.tags = item.tags;
        this.hero=item;
        return;
      }
    });
  }
}
