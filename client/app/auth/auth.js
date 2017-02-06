// 여기에 있는 코드를 변경하지 마시고 공부만 하십시오. 만지지 마시오!
// 이 Auth 컨트롤러는 클라이언트 쪽 인증을 담당합니다.
// Auth 서비스는 가입 / 로그인 양식에서 사용됩니다.
angular.module('HooliPlus.auth', ['ngMaterial'])

.controller('AuthController', function ($scope, $window, $location, Auth, $mdDialog) {
  $scope.user = {};

  $scope.signin = function () {
    // 로그인시 아이디와 패스워드 들어 오는지 콘솔로 찍어본 부분 입니다.
    // console.log($scope.user)
    Auth.signin($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.hooliplus', token);
        if ($scope.user.username) {
          $mdDialog.hide();
          $location.path('/');
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.signup = function () {
    // 아이디와 패스워드 들어 오는지 콘솔로 찍어본 부분 입니다.
    // console.log($scope.user)
    Auth.signup($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.hooliplus', token);
        if ($scope.user.username) {
          $mdDialog.hide();
          $location.path('/');
        }
      })
      .catch(function (error) {
        console.error(error);
      });
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

// 이 부분은 원래 머터리얼 다이얼로그 예제에 있던 것인데 차후에 공부를 위하여 주석으로 남겨 놨습니다.
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
