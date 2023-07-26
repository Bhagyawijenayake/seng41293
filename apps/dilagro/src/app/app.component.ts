import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';


@Component({
  standalone: true,
  imports: [ RouterModule,CommonModule,LoginComponent],
  selector: 'seng41293-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dilagro';
  name='Bhagya';
  frameworks=['Angular','React','Vue','Ember'];
  onClick(){
    this.name='Bhagya sudaraka';
    
  }
}
