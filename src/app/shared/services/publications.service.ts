import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PublicationsService {

  publications:Object[];

  constructor() { 

    console.log('He inyectado el servicio en el componente en el que estás');
    
    this.publications = [
      { name: 'Pepe', publication: 'Hola Soy Pepe y esta pandemia me está matando', img: ''},
      { name: 'María', publication: 'Hola Soy María y esta pandemia me está matando'}
    ]
  }

  getPublications(){
    return this.publications;
  }

}
