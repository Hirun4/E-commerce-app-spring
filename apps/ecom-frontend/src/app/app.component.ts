import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FaConfig, FaIconLibrary } from '@fortawesome/angular-fontawesome';


@Component({
  standalone: true,
  imports: [ RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {

 private faIconLibrary =  inject(FaIconLibrary) 
 private faConfig = inject(FaConfig)

 ngOnInit(): void {
  this.initFontAwesome()
}
 private initFontAwesome() {
    this.faConfig.defaultPrefix =  'far'
  }
}
