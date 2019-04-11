import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import {createCustomElement} from '@angular/elements';
import { HelloWorldComponent } from './hello-world/hello-world.component';

@NgModule({
  declarations: [HelloWorldComponent],
  imports: [
    BrowserModule
  ],
  entryComponents: [HelloWorldComponent],
  providers: []
})
export class AppModule {
  constructor(injector: Injector) {
    const custom = createCustomElement(HelloWorldComponent, {injector});
    customElements.define('app-hello-world', custom);
  }
  ngDoBootstrap() {}
}
