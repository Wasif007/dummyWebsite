(function () {

  angular
    .module('loc8rApp')
    .controller('contactCtrl', contactCtrl);

  contactCtrl.$inject = ['$scope', 'loc8rData', 'geolocation'];
  function contactCtrl ($scope, loc8rData, geolocation) {
   var vm = this;

    vm.credentials = {
      name : "",
      email : "",
      message:""
    };


   vm.onSubmit = function () {
      vm.formError = "";
      if (!vm.credentials.name || !vm.credentials.email
          || !vm.credentials.message
          )
           {
       console.log("Something is missing");
        return false;
     
      } else {
        console.log("Good to Go");
      }
    };
  }

})();