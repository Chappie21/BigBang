import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddButtonComponent } from './components/AddButton/AddButton.component';
import { CardOptionsComponent } from './components/CardOptions/CardOptions.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PreviewIdeaComponent } from './components/PreviewIdea/PreviewIdea.component';
import { RetoCardComponent } from './components/RetoCard/RetoCard.component';
import { SidebarComponent } from './components/Sidebar/Sidebar.component';
import { SlideRetosComponent } from './components/SlideRetos/SlideRetos.component';
import { DashBoardComponent } from './Pages/DashBoard/DashBoard.component';
import { IdeasComponent } from './Pages/Ideas/Ideas.component';
import { InitialViewComponent } from './Pages/InitialView/InitialView.component';
import { LoginComponent } from './Pages/Login/Login.component';
import { PrincipalViewComponent } from './Pages/PrincipalView/PrincipalView.component';
import { OptionSelectService } from './services/OptionSelect.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashBoardComponent,
    NavbarComponent,
    RetoCardComponent,
    CardOptionsComponent,
    SlideRetosComponent,
    InitialViewComponent,
    PrincipalViewComponent,
    SidebarComponent,
    IdeasComponent,
    AddButtonComponent,
    PreviewIdeaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [OptionSelectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
