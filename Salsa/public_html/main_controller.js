Salsa.controller('MainController', ['$scope', '$http', function ($scope, $http) {
        $scope.cards = null;
        
        $http.get('data.json').success(function(response){
            $scope.cards = response;
        });
        
        console.log($scope.cards);
    }]);