import { Place } from './place.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  // tslint:disable-next-line:variable-name
  private _places: Place[] = [
    new Place(
      'p1',
      'Rayong Mansion',
      'In the heart of Rayong',
      'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200',
      350),
    new Place(
      'p2',
      'Bangkok Hotel',
      'Romantic place in BKK',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Paris_Night.jpg/1024px-Paris_Night.jpg',
      500),
    new Place(
      'p3',
      'Chiang mai resort',
      'Not you average city trip!',
      'https://upload.wikimedia.org/wikipedia/commons/0/01/San_Francisco_with_two_bridges_and_the_fog.jpg',
      250)
  ];

  get places(): Place[] {
    return [...this._places];
  }
  constructor() { }

  getPlaceById(id: string) {
    return {...this._places.find(p => p.id === id)};
  }
}
