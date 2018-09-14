class CinemaService {
  static $inject = ['$http'];

  constructor($http) {
    this.$http = $http;
  }

  getCinemas = () => {
    return this.$http.get(`http://localhost:8080/ticketing/cinemas`)
        .then((response) => {
            return response.data;
        })
}

  getMovies = (cinemaId) => {

    return this.$http.get(`http://localhost:8080/ticketing/movies?cinemaId=${cinemaId}`)
        .then((response) => {
            return response.data; 
        })
  }

  getScreenings = (cinemaId, movieId) => {

    return this.$http.get(`http://localhost:8080/ticketing/screenings?cinemaId=${cinemaId}&movieId=${movieId}`)
        .then((response) => {
            return response.data;
        });
  }

  submitDetails = (details) => {
    console.log('submit details function called in service');

    return this.$http.post(`http://localhost:8080/ticketing/createBooking`, details)
        .then((response) => {
            console.log('response from booking service: ' + response.data);
            return response.data;
        });
  }

  cancelBooking = (cancelRef) => {
    //cancel the booking and confirm if it was deleted or else say it wasn't found
  }

}

export default CinemaService;
