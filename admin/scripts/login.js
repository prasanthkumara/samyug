yapp.controller("LoginCtrl", ["$scope", "$location", "$http", function($scope, $location, $http) {
    $scope.submit = function() {
        $scope.invalidDetails = false;
        if (($scope.email == undefined) || ($scope.email == "")) {
            $scope.invalidDetails = true;
            $scope.message = "Please enter email";
            return false;
        }
        if (($scope.password == undefined) || ($scope.password == "")) {
            $scope.invalidDetails = true;
            $scope.message = "Please enter password";
            return false;
        }
        $http({
            method: "POST",
            url: HOST + API_PATH + "/admin/login.php",
            data: "email=" + $scope.email + "&password=" + $scope.password,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
        }).then(function(success) {
            success = success.data;
            if (success.error) {
                console.log(success);
                $scope.invalidDetails = true;
                $scope.message = success.error;
                return;
            }

            $location.path("dashboard");
        });
    }

}]);