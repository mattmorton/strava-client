import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-athlete-summary',
  templateUrl: './athlete-summary.component.html',
  styleUrls: ['./athlete-summary.component.scss']
})
export class AthleteSummaryComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
