import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.css'],
})
export class InputComponent {
  @Input() label: string = '';
  @Input() value: string = '';

  onInputChange(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    console.log(inputValue);
  }
}
