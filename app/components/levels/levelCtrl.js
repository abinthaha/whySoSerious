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
        $http.get('assets/JSON/users.json').success(function(response) {
            $rootScope.user = response[0];
            localStorage.setItem('userData',JSON.stringify(response[0]));
        });
    }
})();
