import { FotoComponent } from './../foto/foto.component';
import { Component } from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
 
export class CadastroComponent {

    foto: FotoComponent = new FotoComponent();

    constructor() {

    }

    cadastrar(event) {
        event.preventDefault();
        console.log(this.foto);
    }

}