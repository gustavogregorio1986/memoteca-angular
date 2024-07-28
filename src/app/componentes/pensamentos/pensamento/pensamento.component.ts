import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from './pensamneto';

@Component({
  selector: 'app-pensamento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent implements OnInit{

     @Input() pensamento: Pensamento = {
        id: 0,
         conteudo: 'Comunicação entre componentes',
         auditoria: 'Angular',
         modelo: 'modelo3'
     }

     constructor() {}

     ngOnInit(): void {
       
     }

     larguraPensamento(){
        if(this.pensamento.conteudo.length >= 256){
          return 'pensamento-g'
        }

        return 'pensamento-p'
     }
}
