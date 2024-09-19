import { Component } from '@angular/core';
import * as $ from 'jquery';
import { faPlus, faMinus, faBars, faGripVertical, faXmark, faTrash, faClone, faArrowUpFromBracket, faPhone, faArrowDownWideShort, faCircleChevronLeft, faRightLeft, faImage, faListUl, faFolder, faChevronLeft, faFileCode, faHome, faGear, faListOl, faIcons,faCircleDot, faEye, faA, faUser, faCalendarDays, faLocationDot, faFontAwesome, faGlobe, faCar, faEnvelope, faUtensils, faBriefcase, faBuilding, faMapLocationDot, faGraduationCap, faSchool, faCheckToSlot, faEarthEurope, faAppleAlt, faLaptopCode, faFont, faBrain, faUserTie, faDiagramProject, faNoteSticky, faEquals,faEyeSlash, faBrush, faBox, faCircle, faCircleCheck, faFilePen, faFileLines, faArrowUpShortWide, faTextHeight, faLink } from '@fortawesome/free-solid-svg-icons'
import { AlyoService } from './alyo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  alyonomesito:  any;
  alyoiconesito: any;
  alyofonts:     any;
  alyocolore:    any;
  alyolingua:    any;
  alyo:          any = this;



  //--------------------------------------------------------

  id_padre = "1";
  percorso_cartella = "alyosviluppo/";

  //--------------------------------------------------------

  // id_padre = "408";
  // percorso_cartella = "alyocms/";

  percorso_sito     = "https://www.alyowool.com/"+this.percorso_cartella;
  percorso_alyowool = "https://www.alyowool.com/";

  //--------------------------------------------------------

  tipi_link:         any = [
    {tipo: "URL" ,nome: "🌐 Url"     ,valore: ""},
    {tipo: "EML" ,nome: "📧 Email"   ,valore: "mailto:"},
    {tipo: "TEL" ,nome: "📱 Telefono",valore: "tel:"},
    {tipo: "WHAP",nome: "💬 Whatsapp",valore: "https://wa.me/"},
  ]

  velocita: any = "10000";

  elemento:             any = {};
  elemento_selezionato: any = {};

  sfondi: any = {
                  true:  this.percorso_sito+"assets/immagini/sfondi/sfondo.gif",
                  false: this.percorso_sito+"assets/immagini/sfondi/sfondofluo.gif"                 
                }
              
  fa: any            = {fa: ['a','home','piu','meno','lista','listanumeri','griglia','cestino',"copia","condividi","telefono","x","ordine","ordinedecrescente","indietro1","scambio","scambio","cartella","indietro2","css",'impostazioni','icone','cerchiopunto','occhio','occhiochiuso',"utente","calendario","locazione","nazione","internet","macchina","email","ristorante","lavoro","azienda","indirizzo","istruzione","scuola","lingua","mela","software","font","voto","capacita","progetto","referente","nota","evento","colore","contenitore","b1","b2","modifica","nuovo","testo","link"],
  "a":{nome: "a",valore: faA},"":{nome:"",valore:""},"home":{nome:"home",valore:faHome}, 
  piu: {nome: "piu",valore: faPlus}, meno: {nome: "meno",valore: faMinus}, 
  lista: {nome: "lista",valore: faBars},listanumeri: {nome: "listanumeri",valore: faListOl},
  griglia: {nome: "griglia",valore: faGripVertical},cestino: {nome: "cestino",valore:faTrash}, 
  copia: {nome: "copia",valore:faClone}, condividi: {nome: "condividi",valore: faArrowUpFromBracket}, 
  telefono: {nome: "telefono",valore:faPhone}, x: {nome: "x",valore: faXmark}, 
  ordine: {nome: "ordine",valore: faArrowDownWideShort}, 
  ordinedecrescente: {nome: "ordinedecrescente",valore: faArrowUpShortWide},
  indietro1: {nome: "indietro",valore: faCircleChevronLeft}, 
  scambio: {nome: "scambio",valore: faRightLeft}, immagine: {nome: "immagine",valore: faImage}, 
  listaul: {nome: "Lista",valore: faListUl}, cartella: {nome: "Cartella", valore: faFolder},
  indietro2: {nome: "indietro",valore: faChevronLeft},css:{nome: "css",valore: faFileCode},
  impostazioni:{nome: "Impostazioni",valore: faGear},icone:{nome: "icone",valore: faIcons},
  cerchiopunto:{nome: "cerchiopunto",valore: faCircleDot},
  occhio:{nome: "occhio",valore: faEye},
  occhiochiuso:{nome: "occhiochiuso",valore: faEyeSlash},
  utente: {nome: "utente",valore: faUser}, 
  calendario: {nome: "calendario",valore: faCalendarDays},
  locazione: {nome: "locazione",valore: faLocationDot}, 
  nazione: {nome: "nazione",valore: faFontAwesome}, 
  internet: {nome: "internet",valore: faGlobe},
  macchina: {nome: "macchina",valore: faCar},
  email: {nome: "email",valore: faEnvelope},  
  ristorante: {nome: "ristorante",valore: faUtensils}, 
  lavoro:  {nome: "lavoro",valore: faBriefcase},
  azienda: {nome: "azienda",valore: faBuilding}, 
  indirizzo: {nome: "indirizzo",valore: faMapLocationDot}, 
  istruzione: {nome: "istruzione",valore: faGraduationCap}, 
  scuola: {nome: "scuola",valore: faSchool}, 
  voto: {nome: "voto",valore: faCheckToSlot}, 
  lingua: {nome: "lingua",valore: faEarthEurope}, 
  mela: {nome: "mela",valore: faAppleAlt}, 
  software: {nome: "software",valore: faLaptopCode},
  font: {nome: "font",valore: faFont},
  capacita: {nome: "capacita",valore: faBrain}, 
  referente: {nome: "referente",valore: faUserTie}, 
  progetto: {nome: "progetto",valore: faDiagramProject},
  nota: {nome: "nota",valore: faNoteSticky},
  evento: {nome:  "evento",valore: faEquals},
  colore: {nome:  "colore",valore: faBrush},
  contenitore: {nome:  "contenitore",valore: faBox},
  b1: {nome:  "b1",valore: faCircle},
  b2: {nome:  "b2",valore: faCircleCheck},
  modifica: {nome: "modifica", valore: faFilePen},
  nuovo: {nome: "nuovo", valore: faFileLines},
  testo: {nome: "testo", valore: faTextHeight},
  testoarea: {nome: "testoarea", valore: faFileLines},
  link: {nome: "link",valore: faLink}
}

  constructor(private alyoservice: AlyoService){}

  ngOnInit(): void { 
    setTimeout(() => {
      this.caricamento();
      this.lista_funzioni();
      this.intervallo();
    },200);
  }

  //-------- FUNZIONI ELEMENTARI (CARICAMENTO)------------------------

  caricamento(){
    this.caricamento_componenti();
  }

  //-------- ALTRE FUNZIONI ------------------------

  caricamento_componenti(){
    
    var formdate = new FormData();
    formdate.append("sql",'');
    formdate.append("opzione","ALBERO_COMPONENTI");
    formdate.append("padre",this.id_padre);
    
    this.alyoservice.alyo_caricamento(formdate).subscribe(dati => {
      
      this.s("ALBERO COMPONENTI: ",dati);
      this.elemento = dati;

    })
    
  }

  ritorna_ele(lista: any,attributo1: string = 'null',attributo2: string = 'null',c: any = ''){
    
    if(lista == undefined || lista.length == 0) {return undefined};

    if(c.length == 0){
      return lista.find((ele: any)=>{return ele[attributo1] == attributo2; });
    }

    if(c.length == 1){
      return lista.find((ele: any)=>{return ele[c[0]][attributo1] == attributo2; });
    }

    if(c.length == 2){
      return lista.find((ele: any)=>{return ele[c[0]][c[1]][attributo1] == attributo2; });
    }

    if(c.length == 3){
      return lista.find((ele: any)=>{return ele[c[0]][c[1]][c[2]][attributo1] == attributo2; });
    }

    if(c.length == 4){
      return lista.find((ele: any)=>{return ele[c[0]][c[1]][c[2]][c[3]][attributo1] == attributo2; });
    }
    
    

  }

  filtro_ele(lista: any,attributo1: string = 'null',attributo2: string = 'null',c: any = []){
    
    if(lista == undefined || lista.length == 0) {return undefined};

    // this.s("FUNZIONE:","filtro_ele")
    // this.s("lista:",lista)
    // this.s("collegamento:",collegamento)

    if(c.length == 0){
      return lista.filter((ele: any)=>{return ele[attributo1] == attributo2; });
    }

    if(c.length == 1){
      return lista.filter((ele: any)=>{return ele[c[0]][attributo1] == attributo2; });
    }

    if(c.length == 2){
      return lista.filter((ele: any)=>{return ele[c[0]][c[1]][attributo1] == attributo2; });
    }

    if(c.length == 3){
      return lista.filter((ele: any)=>{return ele[c[0]][c[1]][c[2]][attributo1] == attributo2; });
    }

    if(c.length == 4){
      return lista.filter((ele: any)=>{return ele[c[0]][c[1]][c[2]][c[3]][attributo1] == attributo2; });
    }
    
    return lista;
  }

  filtro_esclusione_ele(lista: any,attributo1: string = 'null',attributo2: string = 'null',c: any = []){
    
    if(lista == undefined || lista.length == 0) {return undefined};

    // this.s("FUNZIONE:","filtro_esclusione_ele");
    // this.s("lista:",lista);
    // this.s("collegamento:",collegamento);

    if(c.length == 0){
      return lista.filter((ele: any)=>{return ele[attributo1] != attributo2; });
    }

    if(c.length == 1){
      return lista.filter((ele: any)=>{return ele[c[0]][attributo1] != attributo2; });
    }

    if(c.length == 2){
      return lista.filter((ele: any)=>{return ele[c[0]][c[1]][attributo1] != attributo2; });
    }

    if(c.length == 3){
      return lista.filter((ele: any)=>{return ele[c[0]][c[1]][c[2]][attributo1] != attributo2; });
    }

    if(c.length == 4){
      return lista.filter((ele: any)=>{return ele[c[0]][c[1]][c[2]][c[3]][attributo1] != attributo2; });
    }
    
    return lista;
    
  }

  intervallo(){
    setInterval(() => {
      this.lista_funzioni()
    },this.velocita);
  } 

  lista_funzioni(){

    this.alyoiconesito.intervallo();
    this.alyocolore.intervallo();
    this.alyonomesito.intervallo();
    this.aggiornasfondo();
   
  }

  ritorna_elemento_albero(elemento: any,attributo: string,valore: string): any{

    if(elemento[attributo]==valore){return elemento;}

    var ele = undefined;
    try{ 
      for(var elemento2 of elemento.lista){ 
        var ele = this.ritorna_elemento_albero(elemento2,attributo,valore);
        if(ele != undefined){return  ele}
      } 
    }
    catch{}

    return ele;
    
  }

  ritorna_elemento_albero_padre(elemento: any,valore: string): any{

    if(elemento.tipo+elemento.id_componente==valore){return elemento;}

    var ele = undefined;
    try{ 
      for(var elemento2 of elemento.lista){ 
        var ele = this.ritorna_elemento_albero_padre(elemento2,valore);
        if(ele != undefined){return  ele}
      } 
    }
    catch{}

    return ele;
    
  }

  aggiornasfondo(){
    $('body').css('background-image',         'url('+this.sfondi[""+this.alyocolore.modalitachiara+""] + ')');
    $('.alyo-sfondo').css('background-image', 'url('+this.sfondi[""+this.alyocolore.modalitachiara+""] + ')');
  }

  caricamento_elemento(id: string,funzione: string){

    var formdate = new FormData();
    formdate.append("opzione",funzione);
    formdate.append("padre",id);
    
    this.alyoservice.alyo_caricamento(formdate).subscribe(dati => {
      
      //this.s("AGGIUNGI ELEMENTO ALBERO COMPONENTI: ",dati);
      var padre   = this.ritorna_elemento_albero_padre(this.elemento,dati.id_padre); 
      var impostazioni = this.ritorna_ele(dati.impostazioni,'tipo','VSB',[]);
      if(impostazioni != undefined){impostazioni.componente.valore = 'SI';}
      var i =0;
      while (i < padre.lista.length && padre.lista[i].posizione < dati.posizione) {
        i++;
      }
      padre.lista.splice(i,0,dati);

    })

  }

  elimina_elemento(elemento: any){
    
    var padre = this.ritorna_elemento_albero_padre(this.elemento,elemento.id_padre); 

    padre.lista = padre.lista.filter((ele: any) => {return ele.id != elemento.id})
  }

  ritornoclassi(lista: any,elemento: any){
    
    if(lista == undefined){return '';}

    var lista_classi = '';
    
    for(var gruppoclassecomponente of lista){

      if(gruppoclassecomponente.componente.tipo == "CLS"){
        lista_classi += gruppoclassecomponente.componente.componente.valore+" ";
      }

      if(gruppoclassecomponente.componente.tipo != "CLS"){
        lista_classi += this.ritorna_classi_albero(gruppoclassecomponente.componente.lista,elemento);
      }

    }

    return lista_classi;
  }

  /*
      {tipo: "GCLS",nome: "Gruppi Classe"        },
      {tipo: "GCLN",nome: "Colonna  Componente"  },
      {tipo: "CHI" ,nome: "Modalita Chiaro"      },
      {tipo: "SCU" ,nome: "Modalita Scura"       },
      {tipo: "SLZ" ,nome: "Selezionato"          },
      {tipo: "NSLZ",nome: "Non Selezionato"      },
      {tipo: "MCLR",nome: "Multi Colore"         },
  */
  ritorna_classi_albero(lista_gruppi_classi:  any,elemento: any){
   
    if(lista_gruppi_classi == undefined){return '';}
    var lista_classi  = '';

    for(var gruppo_classe of lista_gruppi_classi){

      if(gruppo_classe.tipo == 'CLS'){
        lista_classi += gruppo_classe.componente.valore+" ";
      }

      if(gruppo_classe.tipo == 'GCLS'){
        lista_classi += this.ritorna_classi_albero(gruppo_classe.lista,elemento);
      }

      // if((elemento.tipo == "CNT" || elemento.tipo == "BTN" || elemento.tipo == "LNK") && gruppo_classe.tipo != 'GCLN' && elemento.verticale){
      //   lista_classi += " alyo-dropbox ";
      // }
      
      if(gruppo_classe.tipo == 'GCLN'){
        lista_classi += this.ritorna_classi_albero(gruppo_classe.lista,elemento);
      }

      if(gruppo_classe.tipo == 'CHI' && this.alyocolore.modalitachiara){
        lista_classi += this.ritorna_classi_albero(gruppo_classe.lista,elemento);
      }

      if(gruppo_classe.tipo == 'SCU' && !this.alyocolore.modalitachiara){
        lista_classi += this.ritorna_classi_albero(gruppo_classe.lista,elemento);
      }
  
      var elemento_colorato = this.ritorna_ele(elemento.impostazioni,'tipo','CLR',[]);
      //this.s("elemento_colorato.componente.valore: ",elemento_colorato.componente.valore)

      if(gruppo_classe.tipo == 'SLZ' && elemento_colorato != undefined && elemento_colorato.componente.valore == "SI"){
        lista_classi += this.ritorna_classi_albero(gruppo_classe.lista,elemento);
      }

      if(gruppo_classe.tipo == 'NSLZ' && elemento_colorato != undefined && elemento_colorato.componente.valore == "NO"){
        lista_classi += this.ritorna_classi_albero(gruppo_classe.lista,elemento);
      }

      if(gruppo_classe.tipo == 'MCLR'){
        gruppo_classe.lista ? lista_classi += gruppo_classe.lista[this.alyocolore.contatore%gruppo_classe.lista.length].componente.valore+" ":" ";
      }

    }
    return lista_classi;
  }

  ritorna_classi_albero2(lista_gruppi_classi:  any,elemento: any){

    if(lista_gruppi_classi == undefined){return '';}
    var lista_classi  = '';

    for(var gruppo_classe of lista_gruppi_classi){

      if(gruppo_classe.tipo == 'CLS'){
        lista_classi += gruppo_classe.componente.valore+" ";
      }

      if(gruppo_classe.tipo == 'GCLS'){
        lista_classi += this.ritorna_classi_albero2(gruppo_classe.lista,elemento);
      }

      if(gruppo_classe.tipo == 'GCLN'){
        lista_classi += this.ritorna_classi_albero2(gruppo_classe.lista,elemento);
      }

      if(gruppo_classe.tipo == 'CHI' && this.alyocolore.modalitachiara){
        lista_classi += this.ritorna_classi_albero2(gruppo_classe.lista,elemento);
      }

      if(gruppo_classe.tipo == 'SCU' && !this.alyocolore.modalitachiara){
        lista_classi += this.ritorna_classi_albero2(gruppo_classe.lista,elemento);
      }
  
      //this.s("elemento.impostazioni f2: ",elemento.impostazioni != undefined ? elemento.impostazioni:undefined)
      var elemento_colorato = this.ritorna_ele(elemento.impostazioni,'tipo','CLR',[]);
      
      if(gruppo_classe.tipo == 'SLZ' && elemento_colorato != undefined ? elemento_colorato.componente.valore == "SI":''){
        lista_classi += this.ritorna_classi_albero2(gruppo_classe.lista,elemento);
      }

      if(gruppo_classe.tipo == 'NSLZ' && elemento_colorato != undefined ? elemento_colorato.componente.valore == "NO":''){
        lista_classi += this.ritorna_classi_albero2(gruppo_classe.lista,elemento);
      }

      if(gruppo_classe.tipo == 'MCLR'){
        gruppo_classe.lista ? lista_classi += gruppo_classe.lista[this.alyocolore.contatore%gruppo_classe.lista.length].componente.valore:'';
      }

    }

    return lista_classi;
  }

  /*
    azione: any = [
      {tipo:  "0",    nome: "Nessun Elemento"},
      {tipo:  "CLR",  nome: "Colorazione"},
      {tipo:  "DCLR", nome: "Decolorazione"},
      {tipo:  "CLRD", nome: "Colorazione e decolorazione"},
      {tipo:  "CMP",  nome: "Comparsa"},
      {tipo:  "SCMP", nome: "Scomparsa"},
      {tipo:  "CMPS", nome: "Comparsa e scoparsa"},
    ]
  */
  evento(){

      for(var evento of this.filtro_ele(this.elemento_selezionato.eventi,'tipo','CLK',[])){
        
        //this.s("elemento: ",elemento);
        //this.s("azione: ",evento.lista)

        for(var azione of evento.lista){
          var elemento = this.ritorna_elemento_albero(this.elemento,'id',azione.id_componente);
          
          // this.s("Azione: ",azione);
          // this.s("Evento: ",evento);

          if(elemento == undefined && azione.tipo == "CMP"){
            this.caricamento_elemento(azione.id_componente,'ALBERO_COMPONENTI');
          }

          if(elemento != undefined && azione.tipo == "SCMP"){
            var ele = this.ritorna_elemento_albero(this.elemento,'id',azione.id_componente) 
            this.elimina_elemento(ele)
          }

          if(elemento != undefined && azione.tipo == "CMPS"){

          }

          if(elemento != undefined && azione.tipo == "CLR"){
            var impostazione = this.ritorna_ele(elemento.impostazioni,'tipo','CLR',[]) 
            impostazione.componente.valore = "SI";
          }

          if(elemento != undefined && azione.tipo == "DCLR"){
            var impostazione = this.ritorna_ele(elemento.impostazioni,'tipo','CLR',[]) 
            impostazione.componente.valore = "NO";
          }

          if(elemento != undefined && azione.tipo == "CLRD"){
            var impostazione = this.ritorna_ele(elemento.impostazioni,'tipo','CLR',[]) 
            impostazione != undefined ? (impostazione.componente.valore == "SI" ? impostazione.componente.valore = "NO":"SI"):"";
          }

          if(elemento != undefined && azione.tipo == "ET-1"){
            
            var padre = this.ritorna_elemento_albero_padre(this.elemento,elemento.id_padre);
            this.s("PADRE: ",padre);
            padre.lista = this.filtro_ele(padre.lista,'id',azione.id_componente,[])
            this.s("PADRE: ",padre);
          }

          
        }
      }
  }

  impostazioni_esistenti(elemento: any){
    var impostazioni = this.ritorna_ele(elemento.impostazioni,'tipo','VSB',[]);
    return impostazioni != undefined ? (impostazioni.componente.valore == "NO" ? "alyo-trasparente-70":""):"";
  }

  colore(colore: string){
     return colore != "MC" ? this.alyocolore.fissi[colore][this.alyocolore.modalitachiara]:this.alyocolore.variabile;
  }

  s(intestazione: any, testo: any){
    console.log();
    console.log(intestazione);
    console.log(testo);
    console.log();
  }

}
