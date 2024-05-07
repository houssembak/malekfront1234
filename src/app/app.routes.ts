import { HomeComponent } from "./pages/home/home.component";
import { ChatComponent } from "./pages/chat/chat.component";
import { Routes } from "@angular/router";
import { CalendarComponent } from "./pages/calendar/calendar.component";
import {LoginComponent} from "./pages/login/login.component";
import  {RegisterComponent} from "./pages/register/register.component";
import { BaccaleaureatComponent } from './pages/baccaleaureat/baccaleaureat.component';
import { LicenceComponent } from './pages/licence/licence.component';
import { MasterComponent } from "./pages/master/master.component";
import { IngeurieComponent } from "./pages/ingeurie/ingeurie.component";
import { DoctoratComponent } from "./pages/doctorat/doctorat.component";
 import { ContactusComponent} from "./pages/contactus/contactus.component"


export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "dashboard/home",
  },
  {
    path: "dashboard",
    children: [
      {
        path: "home",
        async loadComponent() {
          return (await import("./pages/home/home.component")).HomeComponent;
        },
      },
    ],
  },
  {
    path: "chat",
    component: ChatComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path: "bac",
    component: BaccaleaureatComponent,
  },
  {
    path: "licence",
    component: LicenceComponent,
  },
  {
    path: "master",
    component: MasterComponent,
  },
  {
    path: "ingeneurie",
    component: IngeurieComponent,
  },
  {
    path: "doctorat",
    component: DoctoratComponent,
  },
  {
    path: "contactus",
    component: ContactusComponent,
  },
  

 

  // {
  //   path: "**",
  //   async loadComponent() {
  //     return (await import("./pages/errors/page-404/page-404.component"))
  //       .Page404Component;
  //   },
  // },
];
