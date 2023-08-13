import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from '../../../services/app/app.service';

@Component({
  selector: 'seng41293-admin-grn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-grn.component.html',
  styleUrls: ['./admin-grn.component.scss']
})
export class AdminGrnComponent {

  @Input({required:true}) label!: string;

  @Output() update = new EventEmitter<string>();

  constructor(private appService:AppService) { }

}
