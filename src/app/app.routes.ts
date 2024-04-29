import { HomeComponent } from "./pages/home/home.component";
import { ChatComponent } from "./pages/chat/chat.component";
import { Routes } from "@angular/router";
import { CalendarComponent } from "./pages/calendar/calendar.component";
import {LoginComponent} from "./pages/login/login.component";
import  {RegisterComponent} from "./pages/register/register.component";
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
 

  // {
  //   path: "**",
  //   async loadComponent() {
  //     return (await import("./pages/errors/page-404/page-404.component"))
  //       .Page404Component;
  //   },
  // },
];
