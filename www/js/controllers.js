angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $state) {

    $scope.loginData = {};

    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });

    $scope.closeLogin = function() { $scope.modal.hide(); };

    $scope.login = function() { $scope.modal.show(); };

    $scope.doLogin = function(form) {
        if(form.valid) {
            console.log('Sign-in', $scope.loginData);
            $state.go('app');
        }
    console.log('Doing login', $scope.loginData);
    $scope.error = $scope.validateForm($scope.loginData);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
  
});
