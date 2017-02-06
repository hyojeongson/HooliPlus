// 여기에 있는 코드를 변경하지 마시고 공부만 하십시오. 만지지 마시오!
// 이 Auth 컨트롤러는 클라이언트 쪽 인증을 담당합니다.
// Auth 서비스는 가입 / 로그인 양식에서 사용됩니다.
angular.module('HooliPlus.auth', ['ngMaterial'])

.controller('AuthController', function ($scope, $window, $location, Auth, $mdDialog) {
  $scope.user = {};

  $scope.signin = function () {
    console.log($scope.user)
    // Auth.signin($scope.user)
    //   .then(function (token) {

        // 토큰 이름 설정 필요
        // $window.localStorage.setItem('com.hooliplus', token);
        if ($scope.user.username) {
          $mdDialog.hide();
          $location.path('/');
        }
      // })
      // .catch(function (error) {
      //   console.error(error);
      // });
  };

  $scope.signup = function () {
    console.log($scope.user)
    // Auth.signup($scope.user)
    //   .then(function (token) {

        // 토큰 이름 설정 필요
        // $window.localStorage.setItem('com.hooliplus', token);
        if ($scope.user.username) {
          $mdDialog.hide();
          $location.path('/');
        }
      // })
      // .catch(function (error) {
      //   console.error(error);
      // });
  };

  // 로그인 모달창
  $scope.customFullscreen = false;
  $scope.hide = function() {
      $mdDialog.hide();
  };

  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  
  $scope.showAdvanced = function(ev) {
    $mdDialog.show({
      // controller: AuthController,
      templateUrl: 'app/auth/signin-popup.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
  };

  // function DialogController($scope, $mdDialog) {
  //   $scope.hide = function() {
  //     $mdDialog.hide();
  //   };

  //   $scope.cancel = function() {
  //     $mdDialog.cancel();
  //   };

  //   $scope.answer = function(answer) {
  //     $mdDialog.hide(answer);
  //   };
  // }
  
  $scope.showAdvanced2 = function(ev) {
    $mdDialog.show({
      // controller: AuthController,
      templateUrl: 'app/auth/signup-popup.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
    // .then(function(answer) {
    //   $scope.status = 'You said the information was "' + answer + '".';
    // }, function() {
    //   $scope.status = 'You cancelled the dialog.';
    // });
  };
})
