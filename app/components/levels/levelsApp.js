(function() {
    'use strict';

    angular.module('whySoSerious.levels', [])
        .config(['$stateProvider', '$urlRouterProvider', routeConfig])
        .directive('ngEnter', function() {
            return function(scope, element, attrs) {
                element.bind("keydown keypress", function(event) {
                    if (event.which === 13) {
                        scope.$apply(function() {
                            scope.$eval(attrs.ngEnter);
                        });
                        event.preventDefault();
                    }
                });
            };
        });;
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
                url: "/question/:levelId",
                templateUrl: './app/components/levels/question.html',
                controller: 'questionCtrl'
            });
    }
})();
