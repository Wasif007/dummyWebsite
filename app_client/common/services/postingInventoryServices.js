(function() {

  angular
    .module('loc8rApp')
    .service('postingMail', postingMail);

  postingMail.$inject = ['$http'];
  function postingMail ($http) {

      var sendingMailRoute=function(user)
    {
return $http.post('/api/uploadingMessage',user).success(function(data){
console.log(data);
});
    }
    return {
      assigningDuty:assigningDuty
    };
  }

})();