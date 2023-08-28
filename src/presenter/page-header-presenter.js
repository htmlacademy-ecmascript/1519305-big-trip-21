import { render, RenderPosition } from '../render.js';

import InfoView from '../view/page-header/info-view.js';
import FiltersView from '../view/page-header/filters-view.js';

export default class PageHeaderPresenter {
  tripInfo = new InfoView();
  tripFilters = new FiltersView();
  init = (container) => {
    this.container = container;

    render(this.tripInfo, this.container.querySelector('.trip-main'), RenderPosition.AFTERBEGIN);
    render(this.tripFilters, this.container.querySelector('.trip-controls__filters'));
  };
}
