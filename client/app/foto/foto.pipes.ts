import { Pipe, PipeTransform } from '@angular/core';
import { FotoComponent } from './foto.component';

@Pipe({
    name: 'FiltroPorTitulo'
})
export class FiltroPorTitulo implements PipeTransform{

    transform(fotos: FotoComponent[], digitado: string){
        digitado = digitado.toLowerCase();
        return fotos.filter(foto => foto.titulo.toLowerCase().includes(digitado));
    }
}