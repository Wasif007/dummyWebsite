(function () {

  angular
    .module('loc8rApp')
    .controller('blogCtrl', blogCtrl);

  blogCtrl.$inject = ['$scope', 'loc8rData', 'geolocation'];
  function blogCtrl ($scope, loc8rData, geolocation) {
   
  }

})();