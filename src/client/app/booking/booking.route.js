(function() {
  'use strict';

  angular
    .module('app.booking')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'booking',
        config: {
          url: '/booking',
          templateUrl: 'app/booking/booking.html',
          controller: 'BookingController',
          controllerAs: 'vm',
          title: 'Booking',
          /* settings: {
            nav: 2,
            content: '<i class="fa fa-lock"></i> Admin'
          } */
        }
      }
    ];
  }
})();
