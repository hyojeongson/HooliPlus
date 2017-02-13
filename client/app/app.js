angular.module('HooliPlus', [
  'HooliPlus.auth',
  'HooliPlus.main',
  'HooliPlus.services',
  'HooliPlus.content',
  'ngMaterial',
  'ngRoute',
  'ngMessages'
  ])

.config(function ($routeProvider, $httpProvider, $locationProvider) {
  $routeProvider

    // index.html 라우트
    .when('/', {
      templateUrl: 'app/index/index.html', // 기본 레이아웃
      controller: 'MainController'
    })
    .when('/', {
      templateUrl: 'app/content/content.html',
      controller: 'ContentController'
    })
    .otherwise({
      redirectTo: '/'
    })
    
  
    // 이후 다른 라우트 자리 들

  $locationProvider.hashPrefix('');
})

