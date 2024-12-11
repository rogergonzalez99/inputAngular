import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-component-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input-component-form.component.html',
  styleUrls: ['./input-component-form.component.css'],
})
export class InputComponentFormComponent {
  @Input() label: string = '';
  @Input() control!: FormControl;
}
