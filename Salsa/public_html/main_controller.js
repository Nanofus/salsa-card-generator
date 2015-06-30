Salsa.controller('MainController', ['$scope', '$http', function ($scope, $http) {
        $scope.cards = null;

        $scope.version = "Salsa 2.0";

        $http.get('data.json').success(function (response) {
            $scope.cards = response;

        });
    }]);