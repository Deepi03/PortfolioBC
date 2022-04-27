import { Component, OnInit } from '@angular/core';
import { faExclamationTriangle, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css']
})
export class WarningComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  faExclamationTriangle = faExclamationTriangle;
  thumb = 'thumb';
  }
