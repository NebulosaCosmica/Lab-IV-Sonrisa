import { Component, OnInit } from '@angular/core';

import {TurnosService}from '../../servicios/turnos.service';

import {Turno} from '../../clases/turno';

import {timer, Subscription} from 'rxjs';

import {ActivadorService} from '../../servicios/activador.service';

@Component({
  selector: 'app-turnos-esp',
  templateUrl: './turnos-esp.component.html',
  styleUrls: ['./turnos-esp.component.css']
})
export class TurnosEspComponent implements OnInit {

  resen:string;

  turnoAModificar:Turno;

  turnosDelEsp:Turno[];

  private susc : Subscription;

  tic : number;
  constructor(private tuse:TurnosService, private pas:ActivadorService) { }

  ngOnInit() {
    this.turnosDelEsp = new Array();
    this.timerSuscribe();
  }


  timerSuscribe(){

    this.tic = 0;
    let timers = timer(200, 50);

    this.susc = timers.subscribe(t=>{
      
      this.tic = this.tic + 1;
      
      switch (this.tic) {
        case 5:
          console.log("esperando loturnos");
        //  console.info(this.tuse.todosLosTurnos);        
            break;            
        
        case 60: 
            console.log("aver aver");
            console.info(this.tuse.todosLosTurnos);        
            let alguien = this.pas.quienEsta();

            if(alguien){
              console.log("logueado: ",alguien.email);
            }else{
              console.log("todavia no");
            }

            this.turnosDelEsp = this.tuse.todosLosTurnos.filter(turno=>{
              return turno.especialista == alguien.email;
            });

            console.info(this.turnosDelEsp);
            this.susc.unsubscribe();
            break;      
        default:
          break;
      }

    });

  }

finalizarTurno(turno:Turno){

  // meto la validacion para el pop up, y modifico la reseña si el estado es solicitado
 // console.info(turno);

  this.turnoAModificar = turno;

  // si el turno esta finalizado que...
}

modificaBase(){
  console.log("acá modifica el turno");

  console.info (this.turnoAModificar);

  this.turnoAModificar.res = this.resen;
  this.turnoAModificar.estado = 'finalizado';

  // console.info(this.turnoAModificar);
  this.tuse.modificarRes(this.turnoAModificar);

  // cerrar el pop up, mostrar otro mensaje, etc. volver al inicio

  // borro el resen.
}

// turnoservice.modificarRes

// modal igual al anterior

} // componente turnosesp
