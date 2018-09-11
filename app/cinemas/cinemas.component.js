'use strict';

// Register `cinenas` component, along with its associated controller and template
angular.
  module('cinemas').
  component('cinemas', {
    templateUrl: 'cinemas/cinemas.template.html',
    controller: ['Cinema',
      function CinemaController(Cinema) {
        this.cinemas = Cinema.query();
      }
    ]
  });