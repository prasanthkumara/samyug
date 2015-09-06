var yapp = angular.module("yapp", ["snap", "ngAnimate", "ngRoute","$routeParams"]);
yapp.config(function($routeProvider,$routeParams) {
    $routeProvider.when('/login', {
        templateUrl: 'views/login.html'
    }).when('/dashboard', {
        templateUrl: 'views/dashboard/overview.html'
    }).when('/overview', {
        templateUrl: 'views/dashboard/overview.html'
    }).when('/reports', {
        templateUrl: 'views/dashboard/reports.html'
    }).when('/:page', {
        templateUrl: 'views/'+$routeParams.page
    }).when('/', {
        templateUrl: 'views/login.html'
    });
});
yapp.run(function($rootScope, $http, $location, $window) {
    $rootScope.slide = '';
    $rootScope.$on('$routeChangeStart', function() {
        $http({
            method: "POST",
            url: HOST + API_PATH + "/admin/checkloggedin.php",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
        }).then(function(success) {
            success = success.data;
            console.log(success);
            if (success.error) {
                if ($location.path().indexOf("login") == -1) {
                    $location.path("login");
                }
                //window.location="";
            } else {
                $rootScope.loggedIn = true;
                if ($location.path().indexOf("login") != -1) {
                    $location.path("dashboard");
                }
            }
        });
    });
    // $("snap-content").width(($(window).width()-265)+"px");
});