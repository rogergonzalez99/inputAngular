import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { InputComponentFormComponent } from './input-component-form.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    ReactiveFormsModule, // Asegúrate de incluir los módulos necesarios
  ],
})
export class AppModule {
  constructor(injector: Injector) {
    // Registrar el componente como un Custom Element
    const customElement = createCustomElement(InputComponentFormComponent, {
      injector,
    });
    customElements.define('input-component-form', customElement);
  }

  ngDoBootstrap() {}
}
