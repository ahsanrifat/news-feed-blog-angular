import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public sharedData: SharedDataService, public router: Router) {}

  ngOnInit(): void {
    if (this.sharedData.isUserLoggedIn()) {
      this.router.navigate(['/weather']);
    }
  }
}
