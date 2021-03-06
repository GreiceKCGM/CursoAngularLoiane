import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com/400/200/nature/';

  valorAtual: string = '';
  valorSalvo = '';

  isMouseOver: boolean = false;

  nomeDoCurso: string = 'Angular';

  valorInicial = 15;


  getValor() {
    return 1;

  }

  getCurtiCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botão Clicado!');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (evento.target as HTMLInputElement).value;
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }
  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;

  }

  onMudouValor(evento) {
    console.log(evento.novoValor);
  }

  constructor() { }

  ngOnInit() {
  }

}
