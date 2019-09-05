import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error-input',
  templateUrl: './error-input.component.html',
  styleUrls: ['./error-input.component.scss']
})
export class ErrorInputComponent implements OnInit {

  @Input() name: any;

  constructor() { }

  ngOnInit() {
  }

}
