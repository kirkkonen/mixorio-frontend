import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  inputValue: string;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    }

  OnInput(event: any) {
      console.log(event.target.value);
      if (event.target.value.length === 64) {
      this.router.navigate([`/transactions/${event.target.value}`]);
      } else if (event.target.value.length === 6) {
      this.router.navigate([`/blocks/${event.target.value}`]);
      } else if (event.target.value.length === 34) {
      this.router.navigate([`/addresses/${event.target.value}`]);
      } else {
      this.router.navigate(['/']);
      }
  }

}
