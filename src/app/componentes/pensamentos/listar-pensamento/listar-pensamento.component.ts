import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PensamentoComponent } from "../pensamento/pensamento.component";
import { CommonModule } from '@angular/common';
import { Pensamento } from '../pensamento/pensamneto';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  standalone: true,
  imports: [RouterLink, PensamentoComponent, CommonModule],
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.css'
})
export class ListarPensamentoComponent implements OnInit{

  listaPensamentos: Pensamento[] = [];
  
  

  constructor(private pensamentoService: PensamentoService) {}

  ngOnInit(): void {
     this.pensamentoService.listar().subscribe(listaPensamentos => {
         this.listaPensamentos = listaPensamentos
     })
  }
}
