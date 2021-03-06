import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //casas[n].pictures[0].url <- Imagen del inmueble
  //casas[n].price.formattedAmount <- Precio del inmueble
  //casas[n].geo <- Ubicacion del inmueble (geo.name para estado, geo.displayName para colonia)
  casas=[];

  constructor(public navCtrl: NavController,
    public http: HttpClient) {

    this.http.get('/v1/pin-data?url=/s-renta-inmuebles/guadalajara-y-zona-metro/v1c1098l10567p1&geo=(21.10631012145462,-102.42214381725364),(20.21712862656199,-104.32387728274637)')
      .subscribe(
        data => {
          //console.log(JSON.stringify(data));
          if (data.hasOwnProperty("ads")) {
            console.log(data.ads.all);
            this.casas=data.ads;
            
          }else{
            console.log ("not found");
          }
        },
        error => {
          console.log(JSON.stringify(error));
        });

  }

}
