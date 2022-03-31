import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { ErrorPageComponent } from "./pages/error-page/error-page.component";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { AuthGuard } from "./services/auth/auth-guard.service";

const appRoutes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    { path: 'not-found', component: ErrorPageComponent, data: {message: 'page not found'}},
    {path: '**', redirectTo: '/not-found'}
  ];
@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{

}