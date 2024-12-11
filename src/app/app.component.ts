/*
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputComponent } from './input-component/input-component.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-input-project';
}
*/
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputComponentFormComponent } from './input-component-form/input-component-form.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputComponentFormComponent,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'angular-input-project';
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      telefono: new FormControl(''),
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }

  get telefonoControl(): FormControl {
    return this.form.get('telefono') as FormControl;
  }
}
