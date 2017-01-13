(function() {
    'use strict';

    angular.module('whySoSerious.home', [])
        .config(['$stateProvider', '$urlRouterProvider', routeConfig]);
    /* @ngInject */

    function routeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: './app/components/home/home.html',
                controller: 'homeCtrl'
            });
        $urlRouterProvider.otherwise('/home');
    }
})();
