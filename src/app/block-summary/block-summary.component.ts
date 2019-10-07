import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExplorerService } from '../explorer.service';
import { Subscription } from 'rxjs';
import { Block, Tx } from '../types';

@Component({
  selector: 'app-block-summary',
  templateUrl: './block-summary.component.html',
  styleUrls: ['./block-summary.component.css']
})
export class BlockSummaryComponent implements OnInit {

  blockheight: number;
  block: Block;
  subscription: Subscription;
  tx: Tx;

  constructor(private activatedRoute: ActivatedRoute, private exService: ExplorerService) {
    this.blockheight = this.activatedRoute.snapshot.params.blockheight;
   }

  ngOnInit() {
    this.subscription = this.exService.fetchBlock(this.blockheight)
    .subscribe((x) => {
      this.block = x;
    });
    }
  }
