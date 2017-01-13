(function() {
    'use strict';

    angular.module('whySoSerious.levels', [])
        .config(['$stateProvider', '$urlRouterProvider', routeConfig]);
    /* @ngInject */

    function routeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('levels', {
                abstract: true,
                template: '<div ui-view></div>'
            })
            .state('levels.level', {
                url: "/level",
                templateUrl: './app/components/levels/level.html',
                controller: 'levelCtrl'
            })
            .state('levels.question', {
                url: "/question",
                templateUrl: './app/components/levels/question.html',
                controller: 'questionCtrl'
            });
    }
})();
