yapp.controller("UserController", ["$scope", "$location", "$http", function($scope, $location, $http) {
    $http({
        method: "POST",
        url: HOST + API_PATH + "/admin/users.php",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
    }).then(function(success) {
        if(!success.data.error)
        {
            $scope.users=success.data;
        }
    });
}]);