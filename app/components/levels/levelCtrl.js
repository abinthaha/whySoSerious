(function() {
    'use strict';

    angular.module('whySoSerious.levels')
        .controller('levelCtrl', levelCtrl);
    /* @ngInject */
    function levelCtrl($scope, $firebaseArray ) {
        var promise = $firebaseArray (firebase.database().ref().child("hackBurst").child("Levels"));
        $scope.levels = []

        promise.$loaded().then(function() {
            angular.forEach(promise, function(value) {
                $scope.levels.push(value);
                console.log(value)
            });
        });
    }
})();
