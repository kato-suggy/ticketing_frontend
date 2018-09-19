(function() {
  'use strict';

  angular
    .module('app.booking')
    .controller('BookingController', BookingController);

  BookingController.$inject = ['logger'];
  /* @ngInject */
  function BookingController(logger) {
    var vm = this;
    vm.title = 'Booking';

    activate();

    function activate() {
      logger.info('Activated Booking View');
    }
  }
})();

    
  
/*     this.service = CinemaService;

    //booleans
    this.booking = false;
    this.cancelling = false;
    this.cinemaSelected = false;
    this.movieSelected = false;
    this.screeningSelected = false;
    this.detailsSubmitted = false;

    //data from service
    this.cinemas = [];
    this.movies = [];
    this.screenings = [];
    this.bookingRef = "";

    //user details for booking service
    this.details = {
      name: "",
      surname: "",
      contactNum: "",
      email: "",
      cardNum: "",
      cinemaId: 0,
      screenId: 0,
      screeningId: 0,
      seatNumbers: []
    };

  getCinemas = () => {
    this.booking = true;
    this.service.getCinemas()
      .then((response) => {
        this.cinemas = response;
      })
  }

  selectCinema = (cinema) => {
    console.log('selectCinema method called');
    console.log('cinema id: ' + cinema.id);
    this.getMovies(cinema.id);
    this.cinemaSelected = true;
    this.details.cinemaId = cinema.id;
  }

  getMovies = (cinemaId) => {
    this.service.getMovies(cinemaId)
      .then((response) => {
        this.movies = response;
      })
  }

  selectMovie = (cinema, movie) => {
    console.log('selectMovie method called');
    console.log('movie id: ' + movie.id);
    this.movieSelected = true;
    this.getScreenings(cinema.id, movie.id);
  }

  getScreenings = (cinemaId, movieId) => {
    this.service.getScreenings(cinemaId, movieId)
      .then((response) => {
        this.screenings = response;
      })
  }

  selectScreening = (screening) => {
    console.log('selectScreening method called');
    console.log('screening id: ' + screening.id);
    this.screeningSelected = true;
    this.selectedScreening = screening;
    this.details.screenId = screening.screenId;
    this.details.screeningId = screening.id;
    this.getSeats(screening);
  }

  getSeats = (screening) => {
    this.seats = screening.availableSeats;
  }

  selectSeat = (seatNum) => {
    console.log('selectSeat method called');
    console.log('seat num: ' + seatNum);
    if (this.details.seatNumbers.includes(seatNum)) {
        this.details.seatNumbers.splice(this.details.seatNumbers.indexOf(seatNum), 1);
    } else {
        this.details.seatNumbers.push(seatNum);
    }
    this.details.seatNumbers.sort();
    console.log('seats selected : ' + this.details.seatNumbers);
  }

  setDetails = (enterDetails) => {
    this.details.name = enterDetails.firstName;
    this.details.surname = enterDetails.lastName;
    this.details.contactNum = enterDetails.mobile;
    this.details.email = enterDetails.email;
    this.details.cardNum = enterDetails.cardNum;
    console.log('first name: ' + this.details.name);
}

  submitDetails = (enterDetails) => {
    this.setDetails(enterDetails);
    console.log('submitDetails method called');
    this.service.submitDetails(this.details)
      .then((response) => {
        this.bookingRef = response.bookingRef;
        console.log('bookingRef: ' + this.bookingRef);
      })
    this.detailsSubmitted = true;
  }

  cancelBooking = (cancelRef) => {
    this.service.cancelBooking(cancelRef)
      .then((response) => {
        //cancelled would be a boolean depending if deleteBooking succeeded or not?
        this.cancelled = response.data;
      })
  } */



