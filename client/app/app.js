angular.module('HooliPlus', [
  'ngMaterial',
  'ngRoute',
  'ngMessages'
  ])

.config(function ($routeProvider, $httpProvider, $locationProvider) {
  $routeProvider

    // index.html 라우트
    .when('/', {
      templateUrl: '../main/main.html', // 기본 레이아웃
      controller: 'MainController'
    })
  
    // 이후 다른 라우트 자리 들

  $locationProvider.hashPrefix('');
})
