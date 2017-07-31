(function () {

  angular
    .module('loc8rApp')
    .controller('postInventoryCtrl', postInventoryCtrl);

    postInventoryCtrl.$inject = ['$http'];

  function postInventoryCtrl($http) {
   /* var vm = this;

    vm.credentials = {
      name : "",
      quantity : "",
      size : "",
      colour:"",
      article:"",
      article_type:"",
      price:""
    };


    vm.onSubmit = function () {
      vm.formError = "";
      if (!vm.credentials.name || !vm.credentials.quantity
          || !vm.credentials.colour || !vm.credentials.size 
          ||!vm.credentials.article || !vm.credentials.article_type
          || !vm.credentials.price
          )
           {
        vm.formError = "All fields required, please try again";
        return false;
     
      } else {
        vm.doAddInventory();
      }
    };

    vm.doAddInventory = function() {
      vm.formError = "";
  return $http.post('/api/addInventory',vm.credentials).success(function(data){
console.log(data);
    };

  
*/
  }

})();