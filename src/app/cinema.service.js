const API = 'http://moviesapi.herokuapp.com/cinemas/'

class CinemaService {
  static $inject = ['$http'];

  constructor($http) {
    this.$http = $http;
  }

  findCinemaByPostcode = (code) => {
    return this.$http.get(`${API}find/${code}`)
      .then((response) => {
        return response.data;
      })
  }

  findShowings = (id) => {
    return this.$http.get(`${API}${id}/showings`)
      .then((response) => {
        return response.data;
      })
  }
}

export default CinemaService;
