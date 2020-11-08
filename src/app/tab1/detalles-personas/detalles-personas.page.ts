import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-detalles-personas',
  templateUrl: './detalles-personas.page.html',
  styleUrls: ['./detalles-personas.page.scss'],
})
export class DetallesPersonasPage implements OnInit {

  persona: Persona;

  constructor(private activatedRouter : ActivatedRoute, private personasService: PersonasService) { }

  ngOnInit() {
    this.activatedRouter.paramMap.subscribe(paramMap => {
      const recipeId = paramMap.get('nombre')
      this.persona = this.personasService.getPersona(recipeId);
      console.log(this.persona)
    })
  }

}
