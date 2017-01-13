(function() {
    'use strict';

    angular.module('whySoSerious', [
    		'ui.router',
            'whySoSerious.home',
            'whySoSerious.login',
            'whySoSerious.levels'
        ])
        .config(['$urlRouterProvider', '$httpProvider',routeConfig])
        .constant('ROOT', './app/components');

    /* @ngInject */

    function routeConfig($urlRouterProvider, $httpProvider) {
        $urlRouterProvider.otherwise('/home');
    }
})();
