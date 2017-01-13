(function() {
    'use strict';

    angular.module('whySoSerious.levels')
        .controller('questionCtrl', questionCtrl);
    /* @ngInject */
    function questionCtrl($scope, $stateParams, $filter, $http) {
        var level;

        $scope.questions = [];
        $scope.hints = [];

        $http.get('assets/JSON/levels.json').success(function(response) {
            level = $filter('filter')(response, { id: parseInt($stateParams.levelId) }, true);
            if (level) {
                $http.get('assets/JSON/questions.json').success(function(questions) {
                    angular.forEach(level[0].questions, function(lvl) {
                        var q = $filter('filter')(questions, { id: parseInt(lvl) }, true);
                        if (q&&q[0])
                            $scope.questions.push(q[0]);
                    });
                });
            }
        });

        function getHints(){
            
        }
    }
})();
