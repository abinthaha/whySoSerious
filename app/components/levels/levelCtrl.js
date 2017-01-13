(function() {
    'use strict';

    angular.module('whySoSerious.levels')
        .controller('levelCtrl', levelCtrl);
    /* @ngInject */
    function levelCtrl($scope) {
        $scope.levels = []
    }
})();
