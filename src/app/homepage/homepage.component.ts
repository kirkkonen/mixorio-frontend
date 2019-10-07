import { Component, OnInit, OnDestroy } from '@angular/core';
import { ExplorerService } from '../explorer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit, OnDestroy {

  btcusdprice: object;
  btcethprice: object;
  btcpmaprice: object;
  general: object;
  subscription: Subscription;
  subscription1: Subscription;
  subscription2: Subscription;
  subscription3: Subscription;

  constructor(private exService: ExplorerService) { }

  ngOnInit() {
    this.subscription = this.exService.fetchBtcUsdPrice()
    .subscribe((x) => {
      this.btcusdprice = x;
    });

    this.subscription1 = this.exService.fetchBtcEthPrice()
    .subscribe((z) => {
      this.btcethprice = z;
    });

    this.subscription2 = this.exService.fetchBtcPmaPrice()
    .subscribe((n) => {
      this.btcpmaprice = n;
    });

    this.subscription3 = this.exService.fetchGeneral()
    .subscribe((y) => {
      this.general = y;
    });

};

ngOnDestroy() {
  this.subscription.unsubscribe();
  this.subscription1.unsubscribe();
  this.subscription2.unsubscribe();
  this.subscription3.unsubscribe();
}}
