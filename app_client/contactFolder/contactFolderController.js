(function () {

  angular
    .module('loc8rApp')
    .controller('contactCtrl', contactCtrl);

  contactCtrl.$inject = ['$scope', 'loc8rData', 'geolocation'];
  function contactCtrl ($scope, loc8rData, geolocation) {
    var vm=this;
   vm.credentials={
    name:"",
    email:"",
    message:""
   }
   
   vm.onSubmittion=function()
   {
      if(!vm.credentials.name || !vm.credentials.email 
    || !vm.credentials.message)
  {
     vm.formError = "All fields required, please try again"
         return false;
     
      }
         }
  }

})();