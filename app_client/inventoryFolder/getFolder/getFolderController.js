(function () {

  angular
    .module('loc8rApp')
    .controller('getInventoryCtrl', getInventoryCtrl);

   getInventoryCtrl.$inject = ['$scope', 'loc8rData', 'geolocation'];
  function getInventoryCtrl ($scope, loc8rData, geolocation) {
   
  }
})();