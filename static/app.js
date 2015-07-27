
app = angular.module('!soShortUrl', []);

app.controller('url', ['$scope', '$http', function($scope, $http) {
  $scope.reset = function() {
    $scope.url.short = '';
    $scope.message = '';
  };

  $scope.shorten = function() {
    $scope.reset();

    $http.post('urls/', $scope.url)
         .success(function(url){      
           $scope.url = url;
         })
         .error(function(error){
            $scope.message = error.message;
         });
  };

  $scope.message = '';

  $scope.url = {full: 'http://google.com',
                short: ''};  
}]);
