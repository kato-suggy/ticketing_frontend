'use strict';
//need to finish this. If it should even be here.
angular.
  module('cinemas').
  factory('Cinemas', ['$resource',
    function($resource) {
      return $resource('phones/:phoneId.json', {}, {
        query: {
          method: 'GET',
          params: {phoneId: 'phones'},
          isArray: true
        }
      });
    }
  ]);