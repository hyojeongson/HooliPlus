angular.module('HooliPlus', [
  'ngMaterial',
  'ngRoute',
  'ngMessages'
  ])

.config(function ($routeProvider, $httpProvider, $locationProvider) {
  
  $locationProvider.hashPrefix('');

})
