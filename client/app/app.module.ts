

import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from "./app.component";
import { FotoModule } from './foto/foto.module';


@NgModule({
    imports: [ BrowserModule, FotoModule ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ] 
})

export class AppModule { }