import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './services/auth.guard';
import { NotfoundComponent } from './notfound/notfound.component';
@NgModule({
    declarations: [
        AppComponent,
        EmployeeComponent,
        LoginComponent,




    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule,

RouterModule.forRoot([
  {
  path:'', redirectTo:'login',
  pathMatch:'full'

},
{

  path: 'login', component:LoginComponent

},
{
  path:'employee', component:EmployeeComponent,

},

{
  path:'**',component:NotfoundComponent
}])

]
})
export class AppModule { }
