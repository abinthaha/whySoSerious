(function() {
    'use strict';

    angular.module('whySoSerious.login', [])
        .config(['$stateProvider', '$urlRouterProvider', routeConfig])

    function routeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('login', {
                url: "/login",
                templateUrl: './app/components/login/login.html',
                controller: 'loginCtrl'
            });
    }
})();
