(function() {
    'use strict';

    angular.module('whySoSerious.levels', [])
        .config(['$stateProvider', '$urlRouterProvider', routeConfig]);
    /* @ngInject */

    function routeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('levels', {
                url: "/levels",
                template: '<div ui-view></div>',
                abstract: true
            })
            .state('levels.level', {
                url: "/levels/level",
                templateUrl: './app/components/levels/level.html',
                controller: 'levelCtrl'
            })
            .state('levels.question', {
                url: "/levels/question",
                templateUrl: './app/components/levels/question.html',
                controller: 'questionCtrl'
            });            
    }
})();
