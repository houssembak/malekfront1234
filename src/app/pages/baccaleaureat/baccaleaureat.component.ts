import { Component } from '@angular/core';
import { HighchartsChartModule } from "highcharts-angular";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { RouterLink } from "@angular/router";
import { SidenavComponent } from "../../components/sidenav/sidenav.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hospital-baccaleaureat',
  standalone: true,
  imports: [
    RouterLink,
    SidenavComponent,
    NavbarComponent,
    HighchartsChartModule,
    CommonModule
  ],
  templateUrl: './baccaleaureat.component.html',
  styleUrl: './baccaleaureat.component.scss'
})
export class BaccaleaureatComponent {

}
