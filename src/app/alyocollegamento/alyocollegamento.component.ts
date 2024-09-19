import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'alyocollegamento',
  templateUrl: './alyocollegamento.component.html',
  styleUrls: ['./alyocollegamento.component.css']
})
export class alyocollegamentoComponent {

  @Input()  alyo:            any = null;
  @Input()  alyocolore:      any = null;
  @Input()  classe:          any = null;
  @Input()  elemento:        any = null;
  @Input()  lista_classe:    any = null;
  @Input()  tipo_classe:     any = null;
  @Input()  componente:      any = null;
  @Input()  pannello_classi: any = null;
  @Input()  padre:           any = null;

  @Input()  alyocontenutiscorrevoli: any = null;

  @Output() alyocollegamento = new EventEmitter()
  @Output() eventopiano     = new EventEmitter()
  @Output() eventobottoneselezionato = new EventEmitter()

  hover = false;
  panello_bottoni = false;
  visibile: string = "si";
  url: any ;
  
  alyocollegamento3: any = null;
  cancella                  = false;

  verticale                 = false;
  pannello_aggiungi         = false;
  pannello_emoticon         = false;
  pannello_tipilink         = false;
  pannello_tipiimmagini     = false;
  panello_tipibottoni       = false;
  panello_tipicontenitori   = false;
  panello_tipicomponenti    = false;

  componenti:              any = [{indice: 0,nome: "contenitore"}     ,{indice: 1,nome: "componente"                      }]
  lista_tipi_link:         any = [{id: 0,nome: "🌐 Url"}              ,{id: 1,nome: "📧 Email"},{id: 2,nome: "📱 Telefono"}]
  lista_tipi_immagini:     any = [{id: 0,nome: "⬆️ Caricamento"}      ,{id: 1,nome: "🌐 Url  "                            }]
  lista_tipi_aggiungi:     any = [{selezione: true, nome: "Composti" },{selezione: false, nome: "Singoli"                 }] 
  lista_tipi_bottoni:      any = [{id: 0, nome: "Selettore"}          ,{id: 1, nome: "Radio Bottone"                      }] 
  lista_tipi_contenitori:  any = [{id: 0, nome: "Padre/Figlio"}       ,{id: 1, nome: "Comparsa"                           }] 
  
  constructor(private sanitizer: DomSanitizer){}

    ngOnInit(): void {this.elemento['verticale']=false;if(this.elemento.tipo == 'FRM'){this.url = this.get_url(this.elemento.componente.valore)}}

    get_url(url: string){
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
    ritornalink(){

      for(var tipo of this.alyo.tipi_link){
        if(tipo.tipo == this.elemento.componente.tipo){
          return tipo.valore+this.elemento.componente.valore
        }
      }
    }
  

  

  


}
