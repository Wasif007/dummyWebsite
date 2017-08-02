(function () {

  angular.module('loc8rApp', ['ngRoute', 'ngSanitize', 'ui.bootstrap']);

  function config ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/homeFolder/homeFolderView.html',
        controller: 'homeCtrl',
        controllerAs: 'vm'
      })
      .when('/about', {
        templateUrl: '/aboutFolder/aboutFolderView.html',
        controller: 'aboutCtrl',
        controllerAs: 'vm'
      })
      .when('/blog', {
        templateUrl: '/blogFolder/blogFolderView.html',
        controller: 'blogCtrl',
        controllerAs: 'vm'
      })
      .when('/contact',{
        templateUrl:'/contactFolder/contactFolderView.html',
        controller:'contactCtrl',
        controllerAs:'vm'
      })
     .when('/detail',{
        templateUrl:'/detailFolder/detailFolderView.html',
        controller:'detailCtrl',
        controllerAs:'vm'
      })
      .when('/product',{
        templateUrl:'/productFolder/productFolderView.html',
        controller:'productCtrl',
        controllerAs:'vm'
      })
      .when('/register',{
        templateUrl:'/registerFolder/registerFolderView.html',
        controller:'registerCtrl',
        controllerAs:'vm'
      })
      .when('/signup',{
        templateUrl:'/loginFolder/loginFolderView.html',
        controller:'loginCtrl',
        controllerAs:'vm'
      })
      .when('/single',{
        templateUrl:'/singleFolder/singleFolderView.html',
        controller:'singleCtrl',
        controllerAs:'vm'
      })
      
      .otherwise({redirectTo: '/'});

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
  }

  angular
    .module('loc8rApp')
    .config(['$routeProvider', '$locationProvider', config]);

})();