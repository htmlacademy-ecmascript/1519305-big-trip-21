import { render } from '../render.js';
import { POINT_COUNT } from '../constants.js';

import TripSortView from '../view/page-main/sort-view.js';
import TripListContainerView from '../view/page-main/list-container-view.js';
import TripListContainerItemView from '../view/page-main/list-container-item-view.js';
import TripPointView from '../view/page-main/waypoint-view.js';
import TripFormEditView from '../view/page-main/form-edit-view.js';

export default class MainPresenter {
  tripEventsListContainer = new TripListContainerView();
  tripFormEditItem = new TripListContainerItemView();

  init = (container) => {
    this.container = container;
    this.tripEventsContainer = this.container.querySelector('.trip-events');

    render(new TripSortView(), this.tripEventsContainer);

    render(this.tripEventsListContainer, this.tripEventsContainer);

    render(this.tripFormEditItem, this.tripEventsListContainer.getElement());
    render(new TripFormEditView(), this.tripFormEditItem.getElement());

    for (let i = 0; i < POINT_COUNT; i++) {
      const tripEventsListContainerItem = new TripListContainerItemView();

      render(tripEventsListContainerItem, this.tripEventsListContainer.getElement());
      render(new TripPointView(), tripEventsListContainerItem.getElement());
    }
  };
}
