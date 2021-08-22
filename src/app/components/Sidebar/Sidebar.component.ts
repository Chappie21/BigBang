import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { OptionSelectService } from 'src/app/services/OptionSelect.service';
import { DisplaySidebarService } from 'src/app/services/displaySidebar/displaySidebar.service';

@Component({
  selector: 'app-Sidebar',
  templateUrl: './Sidebar.component.html',
  styleUrls: ['./Sidebar.component.css']
})
export class SidebarComponent implements OnInit, AfterViewInit {

  public Ideas:string = "text-muted ms-2";
  public ImageIdeas:string = "blue";
  private Screen:any;

  constructor(private option:OptionSelectService, public display:DisplaySidebarService) { }

  ngOnInit() {
      this.Screen = window.innerWidth; // Obtener tamaño de ventana
      this.marcableOption();
      this.changeDisplay();
  }

  ngAfterViewInit(){
      this.marcableOption();
  }

  public marcableOption(){

      if(this.option.options["Ideas"]){
          this.Ideas = "text-danger ms-2";
          this.ImageIdeas = "blue";
      }else{
        this.Ideas = "text-muted ms-2";
        this.ImageIdeas = "blue";
      }


  }

  // Actualizar display según tamaño de pantalla
  private changeDisplay(){

      if(this.Screen >= 992 ){
          this.display.displayforScreen = true;
          this.display.displayforTouch = false;
      }else{
        this.display.displayforScreen = false;
      }
  }

  public Ocultar(){
      this.display.displayforTouch = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:Event){
      this.Screen = window.innerWidth;
      this.changeDisplay();
  }

}
