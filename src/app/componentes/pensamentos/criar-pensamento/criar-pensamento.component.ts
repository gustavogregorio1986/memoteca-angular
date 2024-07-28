import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Pensamento } from '../pensamento/pensamneto';

@Component({
  selector: 'app-criar-pensamento',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css'
})
export class CriarPensamentoComponent implements OnInit{

   pensamento: Pensamento = {
      id: 1,
      conteudo: 'Aprendendo angular',
      auditoria: 'Dev',
      modelo: 'modelo1'
   }

   constructor() {}

  ngOnInit(): void {
    
  }

  criarPensamento(){
      alert("Novo pensamento criado!")
  }

  cancelarPensamento(){
     alert("Cancelar pensamento!")
  }
}
