(function() {

  angular
    .module('loc8rApp')
    .service('postingInventory', postingInventory);

  postingInventory.$inject = ['$http'];
  function postingInventory ($http) {
    var assigningInventory=function(inventory)
    {
return $http.post('/api/addInventory',inventory).success(function(data){
console.log(data);
});
    }
    return {
      assigningInventory:assigningInventory
    };
  }

})();