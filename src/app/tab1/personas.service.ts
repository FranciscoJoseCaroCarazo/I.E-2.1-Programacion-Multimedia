import { Injectable } from '@angular/core';
import {Persona} from './persona.model'

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  private personas: Persona[] = [

    {
      nombre: 'HanSolo',
      descripcion: 'Cazarrecompensas',
      imageURL: 'https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_1000,h_600/https://wipy.tv/wp-content/uploads/2020/03/verdadera-apariencia-de-han-solo-en-star-wars.jpg'
    },
    {
      nombre: 'Rey',
      descripcion: 'Recolectora',
      imageURL: 'https://www.mundiario.com/media/mundiario/images/2019/06/02/2019060218345028369.png'
    },
    {
      nombre: 'Finn',
      descripcion: 'Piloto',
      imageURL: 'https://upload.wikimedia.org/wikipedia/en/2/2a/Finn-Force_Awakens_%282015%29.png'
    },
    {
      nombre: 'Leia',
      descripcion: 'Princesa',
      imageURL: 'https://hipertextual.com/files/2017/04/Leia.jpg'
    }

  ]

  constructor() { }


  getPersonas(){
    return [...this.personas]
  }

  getPersona(nombre: string){
    return{
      ...this.personas.find(persona => {
        return persona.nombre === nombre
      })
    }
  }


}
