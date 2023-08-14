import { render, RenderPosition } from '../render.js';

import TripInfoView from '../view/page-header/info-view.js';
import TripFiltersView from '../view/page-header/filters-view.js';

export default class PageHeaderPresenter {
  tripInfo = new TripInfoView();
  tripFilters = new TripFiltersView();
  init = (container) => {
    this.container = container;

    render(this.tripInfo, this.container.querySelector('.trip-main'), RenderPosition.AFTERBEGIN);
    render(this.tripFilters, this.container.querySelector('.trip-controls__filters'));
  };
}
