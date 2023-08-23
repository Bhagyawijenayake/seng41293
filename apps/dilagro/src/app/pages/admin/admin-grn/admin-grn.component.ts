import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from '../../../services/app/app.service';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngxs/store';
import { ShowLoading } from '../../../state/app/app.actions';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import {MatCardModule} from '@angular/material/card';


interface User {

  name: string;

  email: string;
}

@Component({
  selector: 'seng41293-admin-grn',
  standalone: true,
  imports: [CommonModule, MatButtonModule,MatCardModule],
  templateUrl: './admin-grn.component.html',
  styleUrls: ['./admin-grn.component.scss'],
})
export class AdminGrnComponent {
  @Input({ required: true }) label!: string;

  users$: Observable<User[]>;

  constructor(private httpClient: HttpClient) {
   this.users$= this.httpClient
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      
      
  }
}

//https://jsonplaceholder.typicode.com/photos
