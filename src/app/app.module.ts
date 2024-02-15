import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { HomeScreenComponent } from "./module/home-screen/home-screen.component";
import { UserDashboardComponent } from "./module/user-dashboard/user-dashboard.component";
import { AppRoutingModule } from "./app.routes";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    UserDashboardComponent,
    HeaderComponent,
    FooterComponent],
  imports: [BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

 // AppRoutingModule,
    // BrowserAnimationsModule,
    // MatInputModule,
    // MatButtonModule,
    // MatFormFieldModule,
    // MatCardModule,