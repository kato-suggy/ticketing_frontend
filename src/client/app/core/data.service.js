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
        return $http.get(`http://localhost:8080/ticketing/movies?cinemaId=${cinemaId}`)
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
        return $http.get(`http://localhost:8080/ticketing/screenings?cinemaId=${cinemaId}&movieId=${movieId}`)
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
        return $http.post(`http://localhost:8080/ticketing/createBooking`, details)
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
      /* function cancelBooking(bookingRef) { 
        return $http.delete(`http://localhost:8080/ticketing/cancelBooking?bookingRef=${bookingRef}`, bookingRef)
          .then(success)
          .catch(fail);
  
        function success(response) {
          return response.data;
        }
  
        function fail(e) {
          return exception.catcher('XHR Failed for cancelBooking')(e);
        }
          
      } */

    }
  })();






  /* getCinemas = () => {
    return this.$http.get(`http://localhost:8080/ticketing/cinemas`)
        .then((response) => {
            return response.data;
        })
} */

  /* getMovies = (cinemaId) => {

    return this.$http.get(`http://localhost:8080/ticketing/movies?cinemaId=${cinemaId}`)
        .then((response) => {
            return response.data; 
        })
  } */

  /* getScreenings = (cinemaId, movieId) => {

    return this.$http.get(`http://localhost:8080/ticketing/screenings?cinemaId=${cinemaId}&movieId=${movieId}`)
        .then((response) => {
            return response.data;
        });
  } */

  /* submitDetails = (details) => {
    console.log('submit details function called in service');

    return this.$http.post(`http://localhost:8080/ticketing/createBooking`, details)
        .then((response) => {
            console.log('response from booking service: ' + response.data);
            return response.data;
        });
  } */


