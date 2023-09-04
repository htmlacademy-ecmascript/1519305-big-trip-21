import {mockDestinations} from '../mock/destination.js';
import {getRandomRoutPoint} from '../mock/point.js';
import {mockOffers} from '../mock/offers.js';
import {POINTS_COUNT} from '../const.js';

export default class PointsModel {
  constructor() {
    this.points = Array.from({length: POINTS_COUNT}, getRandomRoutPoint);
    this.destinations = mockDestinations;
    this.offers = mockOffers;
  }

  getPoints() {
    return this.points;
  }

  getDestinations() {
    return this.destinations;
  }

  getOffers() {
    return this.offers;
  }
}
