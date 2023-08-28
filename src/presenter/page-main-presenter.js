import { render } from '../render.js';
import { POINT_COUNT } from '../constants.js';

import SortView from '../view/page-main/sort-view.js';
import ListContainerView from '../view/page-main/list-container-view.js';
import ListContainerItemView from '../view/page-main/list-container-item-view.js';
import WaypointView from '../view/page-main/waypoint-view.js';
import FormEditView from '../view/page-main/form-edit-view.js';

export default class MainPresenter {
  tripEventsListContainer = new ListContainerView();
  tripFormEditItem = new ListContainerItemView();

  init = (container) => {
    this.container = container;
    this.tripEventsContainer = this.container.querySelector('.trip-events');

    render(new SortView(), this.tripEventsContainer);

    render(this.tripEventsListContainer, this.tripEventsContainer);

    render(this.tripFormEditItem, this.tripEventsListContainer.getElement());
    render(new FormEditView(), this.tripFormEditItem.getElement());

    for (let i = 0; i < POINT_COUNT; i++) {
      const tripEventsListContainerItem = new ListContainerItemView();

      render(tripEventsListContainerItem, this.tripEventsListContainer.getElement());
      render(new WaypointView(), tripEventsListContainerItem.getElement());
    }
  };
}
