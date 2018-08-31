import angular from 'angular';
import CinemaController from './cinema.controller';
import CinemaService from './cinema.service';
import cinemaApp from './cinema.directive';

// import '../style/app.css';

const MODULE_NAME = 'app';

angular
  .module(MODULE_NAME, [])
  .controller('CinemaController', CinemaController)
  .service('CinemaService', CinemaService)
  .directive('cinemaApp', cinemaApp)

export default MODULE_NAME;
