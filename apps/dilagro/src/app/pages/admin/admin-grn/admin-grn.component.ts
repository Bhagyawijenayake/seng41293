import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from '../../../services/app/app.service';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngxs/store';
import { ShowLoading } from '../../../state/app/app.actions';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatInputModule } from '@angular/material/input';

import { Firestore,  collection,addDoc } from '@angular/fire/firestore';
import * as moment from 'moment';
interface GRN {
  date: Date;
  customer: {
    name: string;
    phone: string;
  };
}

@Component({
  selector: 'seng41293-admin-grn',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule, // Import this module
    MatMomentDateModule,
    MatInputModule,
  ],
  templateUrl: './admin-grn.component.html',
  styleUrls: ['./admin-grn.component.scss'],
})
export class AdminGrnComponent {
  @Input({ required: true }) label!: string;
  firestore: Firestore = inject(Firestore);

  dateCtrl = new FormControl();
  nameCtrl = new FormControl();
  phoneCtrl = new FormControl();
  customerCtrl = new FormGroup({
    name: this.nameCtrl,
    phone: this.phoneCtrl,
  });

  grnFormGroup = new FormGroup({
    date: this.dateCtrl,
    customer: this.customerCtrl,
  });

  grnCollection = collection(this.firestore, 'grn');

  async onSave() {
    console.log(this.grnFormGroup.value);
    const date = new Date(this.grnFormGroup.value.date);
    console.log(date);
    
    const toSave ={
      ...this.grnFormGroup.value,
      date,
    }
    await addDoc(this.grnCollection,toSave);
  }
}
