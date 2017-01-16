(function() {
    'use strict';

    angular.module('whySoSerious.levels')
        .controller('questionCtrl', questionCtrl);
    /* @ngInject */

    function questionCtrl($scope, $stateParams, $filter, $http, $rootScope, $location) {
        var level;
        $scope.answer = "";
        $scope.questions = [];
        $scope.hints = [];
        $scope.currentQuestion = {};
        $scope.currentIndex = -1;

        if (localStorage.getItem('userData')) {
            if($rootScope.user != null) {
                $rootScope.user.points = 20;
            }
            else {
                $location.path("login");
            }
        }

        $http.get('assets/JSON/levels.json').success(function(response) {
            level = $filter('filter')(response, {
                id: parseInt($stateParams.levelId)
            }, true);
            if (level && level[0]) {
                $http.get('assets/JSON/questions.json').success(function(questions) {
                    angular.forEach(level[0].questions, function(lvl) {
                        var q = $filter('filter')(questions, {
                            id: parseInt(lvl)
                        }, true);
                        if (q && q[0])
                            $scope.questions.push(q[0]);
                    });
                    $scope.getQuestions(0);
                });
            }
        });

        $scope.getQuestions = function(index) {
            $scope.currentIndex = index;
            $scope.currentQuestion = $scope.questions[index];
            $scope.answer = "";
        }

        $scope.nextQuestion = function() {
            $scope.currentQuestion = $scope.questions[++$scope.currentIndex];
        }

        $scope.getHint = function() {
            if (!$scope.questions[$scope.currentIndex].hintShown) {
                $rootScope.user.points -= 5;
                $scope.questions[$scope.currentIndex].hintShown = true;
                $scope.questions[$scope.currentIndex].hintActive = true;
                localStorage.setItem('userData', JSON.stringify($rootScope.user));
                return $scope.currentQuestion.hint;
            }
        }

        $scope.solve = function() {
            $rootScope.user.points -= 10;
            localStorage.setItem('userData', JSON.stringify($rootScope.user));
            $scope.answer = $scope.currentQuestion.answer;
        }

        $scope.checkAnswer = function() {
            if ($scope.answer.toLocaleLowerCase().replace(/ +(?= )/g, '') == $scope.currentQuestion.answer.toLocaleLowerCase().replace(/ +(?= )/g, '')) {
                $rootScope.user.points += 10;
                $scope.questions[$scope.currentIndex].wrongAnswer = false;
                $scope.questions[$scope.currentIndex].disabled = true;
                $scope.currentQuestion.disabled = true;
                localStorage.setItem('userData', JSON.stringify($rootScope.user));
            } else {
                $scope.questions[$scope.currentIndex].wrongAnswer = true;
            }
        }
    }
})();
