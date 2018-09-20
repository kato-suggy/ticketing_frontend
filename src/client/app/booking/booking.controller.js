(function() {
  'use strict';

  angular
    .module('app.booking')
    .controller('BookingController', BookingController);

  BookingController.$inject = ['$q', 'dataservice', 'logger'];
  /* @ngInject */
  function BookingController($q, dataservice, logger) {
    var vm = this;
    vm.title = 'Movie ticket booking';

    //booleans
    vm.booking = false;
    vm.cancelling = false;
    vm.cinemaSelected = false;
    vm.movieSelected = false;
    vm.screeningSelected = false;
    vm.detailsSubmitted = false;

    //data from service
    vm.cinemas = [];
    vm.movies = [];
    vm.screenings = [];
    vm.bookingRef = '';

    //data to be sent to service
    vm.details = {
      name: '',
      surname: '',
      contactNum: '',
      email: '',
      cardNum: '',
      cinemaId: 0,
      screenId: 0,
      screeningId: 0,
      seatNumbers: []
    };

    //functions that interact with dataservice
    vm.getCinemas = getCinemas;
    vm.getMovies = getMovies;
    vm.getScreenings = getScreenings;
    vm.submitDetails = submitDetails;
    vm.cancelBooking = cancelBooking;

    //additional functions
    vm.selectCinema = selectCinema;
    vm.selectMovie = selectMovie;
    vm.selectScreening = selectScreening;
    vm.selectSeat = selectSeat;
    vm.getSeats = getSeats;
    vm.setDetails = setDetails;

    activate();

    //only want one promise returned until get more info from user
    function activate() {
      var promises = [
        getCinemas()
      ];
      return $q.all(promises).then(function() {
        logger.info('Activated Booking View');
      });
    }

    function getCinemas() {
      return dataservice.getCinemas().then(function(data) {
        vm.cinemas = data;
        return vm.cinemas;
      });
    }

    function getMovies(cinemaId) {
      return dataservice.getMovies(cinemaId).then(function(data) {
        vm.movies = data;
        return vm.movies;
      });
    }

    function getScreenings(cinemaId, movieId) {
      return dataservice.getScreenings(cinemaId, movieId).then(function(data) {
        vm.screenings = data;
        return vm.screenings;
      });
    }

    function submitDetails(enterDetails) {
      vm.setDetails(enterDetails);
      return dataservice.submitDetails(vm.details).then(function(data) {
        vm.bookingRef = data.bookingRef;
        vm.detailsSubmitted = true;
        return vm.bookingRef;
      });
    }

    function cancelBooking(cancelRef) {
      return dataservice.cancelBooking(cancelRef).then(function(data) {
        vm.cancelled = data;
      });
    }

    function selectCinema(cinema) {
      console.log('selectCinema method called');
      console.log('cinema id: ' + cinema.id);
      vm.getMovies(cinema.id);
      vm.cinemaSelected = true;
      vm.details.cinemaId = cinema.id;
    }

    function selectMovie(cinema, movie) {
      console.log('selectMovie method called');
      console.log('movie id: ' + movie.id);
      vm.movieSelected = true;
      vm.getScreenings(cinema.id, movie.id);
    }

    function selectScreening(screening) {
      console.log('selectScreening method called');
      console.log('screening id: ' + screening.id);
      vm.screeningSelected = true;
      vm.selectedScreening = screening;
      vm.details.screenId = screening.screenId;
      vm.details.screeningId = screening.id;
      vm.getSeats(screening);
    }

    function getSeats(screening) {
      vm.seats = screening.availableSeats;
    }

    function selectSeat(seatNum) {
      console.log('selectSeat method called');
      console.log('seat num: ' + seatNum);
      if (vm.details.seatNumbers.includes(seatNum)) {
        vm.details.seatNumbers.splice(vm.details.seatNumbers.indexOf(seatNum), 1);
      } else {
        vm.details.seatNumbers.push(seatNum);
      }
      vm.details.seatNumbers.sort();
      console.log('seats selected : ' + vm.details.seatNumbers);
    }

    function setDetails(enterDetails) {
      vm.details.name = enterDetails.firstName;
      vm.details.surname = enterDetails.lastName;
      vm.details.contactNum = enterDetails.mobile;
      vm.details.email = enterDetails.email;
      vm.details.cardNum = enterDetails.cardNum;
      console.log('first name: ' + vm.details.name);
    }
  }
})();
