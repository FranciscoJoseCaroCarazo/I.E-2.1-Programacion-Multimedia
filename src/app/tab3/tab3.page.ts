import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public controlAlerta: AlertController) {}

  async pruebaAlerta(){
    const alert = await this.controlAlerta.create({
      header: 'Alerta',
      message: 'Esto es una prueba de IONIC',
      buttons: ['OK','Un 10']
    });


    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);

  }

}
