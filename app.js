var app = angular.module("App",["main"]);

var main = angular.module("main",[]);

main.controller("mainController", function($scope, $http){

    //variables that need to be submitted to booking function
    $scope.details = {
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

    $scope.getCinemas = function () {
        $scope.booking = true;
        $scope.cancelling = false;
        cinemas = $http.get(`http://localhost:8080/ticketing/cinemas`)
            .then(function(response, status, headers, config) {
                $scope.cinemas = response.data;
            });
    }

    $scope.selectCinema = function (cinema) {
        $scope.getMovies(cinema.id);
        $scope.cinemaSelected = true;
        $scope.details.cinemaId = cinema.id;
    }

    $scope.getMovies = function (cinemaId) {

        movies = $http.get(`http://localhost:8080/ticketing/movies?cinemaId=${cinemaId}`)
            .then(function(response, status, headers, config) {
                $scope.movies = response.data; 
            });
    }

    $scope.selectMovie = function (cinema, movie) {
        $scope.movieSelected = true;
        $scope.selectedMovie = movie;
        $scope.getScreenings(cinema.id, movie.id);
    }

    $scope.getScreenings = function (cinemaId, movieId) {

        screenings = $http.get(`http://localhost:8080/ticketing/screenings?cinemaId=${cinemaId}&movieId=${movieId}`)
            .then(function(response, status, headers, config) {
                $scope.screenings = response.data;
            });
    }

    $scope.selectScreening = function (screening) {
        $scope.screeningSelected = true;
        $scope.selectedScreening = screening;
        $scope.details.screenId = screening.screenId;
        $scope.details.screeningId = screening.id;
        $scope.getSeats(screening);
    }

    $scope.getSeats = function (screening) {
        $scope.seats = screening.availableSeats;
    }

    $scope.selectSeat = function (seatNum) {
        if ($scope.details.seatNumbers.includes(seatNum)) {
            $scope.details.seatNumbers.splice($scope.details.seatNumbers.indexOf(seatNum), 1);
        } else {
            $scope.details.seatNumbers.push(seatNum);
        }
        $scope.details.seatNumbers.sort();
    }

    $scope.setDetails = function (enterDetails) {
        $scope.details.name = enterDetails.firstName;
        $scope.details.surname = enterDetails.lastName;
        $scope.details.contactNum = enterDetails.mobile;
        $scope.details.email = enterDetails.email;
        $scope.details.cardNum = enterDetails.cardNum;
    }

    $scope.submitDetails = function (enterDetails) {
        $scope.setDetails(enterDetails);
        $scope.detailsSubmitted = true;
        $http.post(`http://localhost:8080/ticketing/createBooking`, $scope.details)
            .then(function(response, status, headers, config) {
                $scope.bookingRef = response.data.bookingRef;
                $scope.detailsSubmitted = true;
                //$scope.form.$setUntouched();
                $scope.details={};
            });
    }

    $scope.cancelBooking = function (cancelRef) {
        //check if the ref exists
        //if so, cancel the booking and confirm
        //if not, alert booking not found
    }

});