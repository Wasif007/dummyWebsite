(function () {

  angular
    .module('loc8rApp')
    .controller('contactCtrl', contactCtrl);

  contactCtrl.$inject = ['$scope', 'loc8rData'];
  function contactCtrl ($scope, loc8rData,) {
   var vm=this;
   vm.credentials={
    name:"",
    message:"",
    email:""
   }
   

   vm.onSubmittion=function()
   {
   	
      if(!vm.credentials.time || !vm.credentials.email 
    || !vm.credentials.message )
 {
     vm.formError = "All fields required, please try again"
         return false;
 }    
      }
   




  }

})();