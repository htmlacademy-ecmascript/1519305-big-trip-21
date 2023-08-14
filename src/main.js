import HeaderPresenter from './presenter/page-header-presenter.js';
import MainPresenter from './presenter/page-main-presenter.js';

const headerPresenter = new HeaderPresenter();
const mainPresenter = new MainPresenter();

const $siteHeaderElement = document.querySelector('.page-header');
const $siteMainElement = document.querySelector('.page-main');

headerPresenter.init($siteHeaderElement);
mainPresenter.init($siteMainElement);
