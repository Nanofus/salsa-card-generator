Salsa.controller('MainController', ['$scope', '$http', function ($scope, $http) {
        $scope.cards = $http.get('../data.json').success(function (response) {
            console.log(response.data);
            return response.data;
        });

    }]);