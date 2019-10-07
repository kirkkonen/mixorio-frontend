import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExplorerService } from '../explorer.service';
import { Subscription } from 'rxjs';
import { Tx, Vin, Vout } from '../types';


@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class TransactionDetailsComponent implements OnInit {

  // exService: ExplorerService;
  // activatedRoute: ActivatedRoute;
  hash = '';
  tx: Tx;
  vin: Vin;
  vout: Vout;
  subscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private exService: ExplorerService) {
    // debugger
    this.hash = this.activatedRoute.snapshot.params.hash;
    // this.exService = exService;
   }

  ngOnInit() {
    // debugger
    // this.hash = this.activatedRoute.snapshot.params.hash;
    this.subscription = this.exService.fetchTx(this.hash)
      .subscribe((x) => {
        this.tx = x;
      });
  }

}
