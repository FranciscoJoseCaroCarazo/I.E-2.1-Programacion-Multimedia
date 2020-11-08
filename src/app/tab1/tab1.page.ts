import { Component, OnInit } from '@angular/core';
import { PersonasService } from "./personas.service";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  personas = []

  constructor(private personaService: PersonasService) {}

  ngOnInit(){
    this.personas = this.personaService.getPersonas()
  }

}
