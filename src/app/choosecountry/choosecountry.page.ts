import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choosecountry',
  templateUrl: './choosecountry.page.html',
  styleUrls: ['./choosecountry.page.scss'],
})
export class ChoosecountryPage implements OnInit {
  selected: any;

  categories = [
    { name: 'Albania', imageUrl: 'assets/images/flag-1.png' },
    { name: 'Andorra', imageUrl: 'assets/images/flag-2.png' },
    { name: 'Azerbaijan', imageUrl: 'assets/images/flag-3.png'},
    { name: 'Austria', imageUrl: 'assets/images/flag-4.png' },
    { name: 'Armenia', imageUrl: 'assets/images/flag-5.png' },
    { name: 'Belgium', imageUrl: 'assets/images/flag-6.png' },
    { name: 'Bosnia and Herzegovina', imageUrl: 'assets/images/flag-7.png' },
    { name: 'Bulgaria', imageUrl: 'assets/images/flag-8.png' },
    { name: 'Belarus', imageUrl: 'assets/images/flag-9.png' },
    { name: 'Canada', imageUrl: 'assets/images/flag-10.png' },
    { name: 'Croatia', imageUrl: 'assets/images/flag-11.png' },
    { name: 'Cyprus', imageUrl: 'assets/images/flag-12.png' },
    { name: 'Czechia', imageUrl: 'assets/images/flag-13.png' },
    { name: 'Denmark', imageUrl: 'assets/images/flag-14.png' },
    { name: 'Estonia', imageUrl: 'assets/images/flag-15.png' },
    { name: 'Finland', imageUrl: 'assets/images/flag-16.png' },
    { name: 'France', imageUrl: 'assets/images/flag-17.png' },
    { name: 'Georgia', imageUrl: 'assets/images/flag-18.png' },
    { name: 'Germany', imageUrl: 'assets/images/flag-19.png' },
    { name: 'Greece', imageUrl: 'assets/images/flag-20.png' },
    { name: 'Holy See', imageUrl: 'assets/images/flag-21.png' },

  ];
  activeCategory: string = '';

  constructor() {}

  toggleActive(category: string) {
    if (this.activeCategory === category) {
      this.activeCategory = '';
    } else {
      this.activeCategory = category;
    }
  }

  isActive(category: string): boolean {
    return this.activeCategory === category;
  }


  ngOnInit() {
  }

  // select(item:any) {
  //   this.selected = item;
  // }
  // isActive(item:any) {
  //   return this.selected === item;
  // }

}
