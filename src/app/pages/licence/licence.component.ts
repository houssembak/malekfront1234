import { Component } from '@angular/core';
import { HighchartsChartModule } from "highcharts-angular";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { RouterLink } from "@angular/router";
import { SidenavComponent } from "../../components/sidenav/sidenav.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hospital-licence',
  standalone: true,
  imports: [
    RouterLink,
    SidenavComponent,
    NavbarComponent,
    HighchartsChartModule,
    CommonModule
  ],
  templateUrl: './licence.component.html',
  styleUrl: './licence.component.scss'
})
export class LicenceComponent {

}
