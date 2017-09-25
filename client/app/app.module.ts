import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from "./app.component";
import { FotoModule } from './foto/foto.module';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { PainelModule } from './painel/painel.module';


@NgModule({
    imports: [ BrowserModule, FotoModule, HttpModule, PainelModule ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ] 
})

export class AppModule { }