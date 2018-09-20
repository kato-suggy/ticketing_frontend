(function() {
    'use strict';
  
    angular
      .module('app.core')
      .factory('dataservice', dataservice);
  
    dataservice.$inject = ['$http', '$q', 'exception', 'logger'];
    /* @ngInject */
    function dataservice($http, $q, exception, logger) {
      var service = {
        getCinemas: getCinemas,
        getMovies: getMovies,
        getScreenings: getScreenings,
        submitDetails: submitDetails,
        cancelBooking: cancelBooking
      };
      return service;
  
      function getCinemas() {
        return $http.get('http://localhost:8080/ticketing/cinemas')
          .then(success)
          .catch(fail);
        function success(response) {
          return response.data;
        }
        function fail(e) {
          return exception.catcher('XHR Failed for getCinemas')(e);
        }
      }

      function getMovies(cinemaId) { 
        console.log('getMovies called in data.service');
        return $http.get('http://localhost:8080/ticketing/movies?cinemaId=' + cinemaId)
          .then(success)
          .catch(fail);
        function success(response) {
          return response.data;
        }
        function fail(e) {
          return exception.catcher('XHR Failed for getMovies')(e);
        }    
      }

      function getScreenings(cinemaId, movieId) { 
        return $http.get('http://localhost:8080/ticketing/screenings?cinemaId=' + cinemaId + '&movieId=' + movieId)
          .then(success)
          .catch(fail);
        function success(response) {
          return response.data;
        }
        function fail(e) {
          return exception.catcher('XHR Failed for getScreenings')(e);
        }
      }

      function submitDetails(details) { 
        return $http.post('http://localhost:8080/ticketing/createBooking', details)
          .then(success)
          .catch(fail);
        function success(response) {
          return response.data;
        }
        function fail(e) {
          return exception.catcher('XHR Failed for submitDetails')(e);
        }
      }

      //Cancel function just sketched out for now, need to check url and params
      function cancelBooking(bookingRef) {
        console.log(bookingRef);
        /* return $http.delete('http://localhost:8080/ticketing/cancelBooking?bookingRef=' + bookingRef, bookingRef)
          .then(success)
          .catch(fail);
        function success(response) {
          return response.data;
        }
        function fail(e) {
          return exception.catcher('XHR Failed for cancelBooking')(e);
        } */
      }
    }
  })();