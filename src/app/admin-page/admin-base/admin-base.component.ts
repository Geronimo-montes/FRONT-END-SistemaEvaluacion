import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-base',
  templateUrl: './admin-base.component.html',
  styleUrls: ['./admin-base.component.css']
})
export class AdminBaseComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void { }

}
