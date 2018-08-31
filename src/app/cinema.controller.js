class CinemaController {
  constructor(CinemaService) {
    this.search = {};
    this.service = CinemaService;
    this.cinemas = [];
    this.showings = [];
  }

  findCinemaByPostcode = () => {
    this.service.findCinemaByPostcode(this.search.postcode)
      .then((response) => {
        this.cinemas = response;
        this.search = {};
      })
  }
  findShowings = (id) => {
    this.service.findShowings(id)
      .then((response) => {
        this.showings = response;
        this.cinemas = [];
      })
  }
}

export default CinemaController;
