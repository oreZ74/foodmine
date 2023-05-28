import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { sample_foods } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

// Get all the data from Food.ts.
// This service should be connected to the backend and get the data from backend.
// But it's not implementet yet.
  getAll():Food[]{
    return sample_foods;
  }
}
