import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'seng41293-admin-grn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-grn.component.html',
  styleUrls: ['./admin-grn.component.scss']
})
export class AdminGrnComponent {

  @Input({required:true}) label!: string;

}
