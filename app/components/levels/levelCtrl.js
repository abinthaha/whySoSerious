(function() {
    'use strict';

    angular.module('whySoSerious.levels')
        .controller('levelCtrl', levelCtrl);
    /* @ngInject */

    function levelCtrl($scope, $http, $rootScope) {
        $scope.levels = [];
        $http.get('assets/JSON/levels.json').success(function(response) {
            $scope.levels = response;
        });

        $rootScope.user = [];

        $rootScope.user = JSON.parse(localStorage.getItem('userData'));
    }
})();
