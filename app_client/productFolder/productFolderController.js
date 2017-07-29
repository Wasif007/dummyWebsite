(function () {

  angular
    .module('loc8rApp')
    .controller('productCtrl', productCtrl);

  productCtrl.$inject = ['$scope', 'loc8rData', 'geolocation'];
  function productCtrl ($scope, loc8rData, geolocation) {
   
  }

})();