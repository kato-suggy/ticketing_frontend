var app = angular.module("App",["main"]);

var main = angular.module("main",[]);

main.controller("mainController", function($scope, $http){

    //variables that need to be submitted to booking function
    $scope.name = "";
    $scope.surname = "";
    $scope.contactNum = "";
    $scope.email = "";
    $scope.cardNum = "";
    $scope.cinemaId = 0;
    $scope.screenId = 0;
    $scope.screeningId = 0;
    $scope.seatNumbers = [];

    $scope.getCinemas = function () {
        console.log('getting cinemas');
        $scope.booking = true;

        cinemas = $http.get(`http://localhost:8080/ticketing/cinemas`)
            .then(function(response, status, headers, config) {
                $scope.cinemas = response.data;

            });
    }

    $scope.selectCinema = function (cinema) {
        console.log('meep', cinema)
        $scope.getMovies(cinema.id);
        $scope.cinemaSelected = true;
    }

    $scope.getMovies = function (cinemaId) {
        console.log('meep', cinemaId);
        console.log('getting movies');

        movies = $http.get(`http://localhost:8080/ticketing/movies?cinemaId=${cinemaId}`)
            .then(function(response, status, headers, config) {
                $scope.movies = response.data;
                
            });
    }

    $scope.selectMovie = function (cinema, movie) {
        $scope.movieSelected = true;
        $scope.selectedMovie = movie;
        console.log('chosen movie');

        $scope.getScreenings(cinema.id, movie.id);
    }

    $scope.getScreenings = function (cinemaId, movieId) {
        console.log('meep', cinemaId);
        console.log('meep', movieId);
        console.log('getting screenings');

        screenings = $http.get(`http://localhost:8080/ticketing/screenings?cinemaId=${cinemaId}&movieId=${movieId}`)
            .then(function(response, status, headers, config) {
                $scope.screenings = response.data;
            });
    }

    $scope.selectScreening = function (screening) {
        $scope.screeningSelected = true;
        $scope.selectedScreening = screening;
        console.log('chosen screening');
        $scope.getSeats(screening);
    }

    $scope.getSeats = function (screening) {
        console.log('meep', screening.id);
        console.log('getting seats');
        console.log('meep', screening.availableSeats);
        $scope.seats = screening.availableSeats;

    }

    $scope.selectSeat = function (seatNum) {
        console.log('meep', seatNum);
        if ($scope.seatNumbers.includes(seatNum)) {
            $scope.seatNumbers.splice($scope.seatNumbers.indexOf(seatNum), 1);
            console.log('unselected a seat');
            console.log('meep', $scope.seatNumbers);
        } else {
            $scope.seatNumbers.push(seatNum);
            console.log('selected a seat');
            console.log('meep', $scope.seatNumbers);
        }
        $scope.seatNumbers.sort();
        console.log('meep', $scope.seatNumbers);
    }

    //$scope.getDetails = function () {}


    
});