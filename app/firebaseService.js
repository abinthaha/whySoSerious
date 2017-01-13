(function() {
    'use strict';

    angular.module('whySoSerious')
        .factory('firebaseService', ['$firebaseArray', function($firebaseArray) {

            function where(from, key, value) {
                var ref = new Firebase("https://hackburst-41acc.firebaseio.com/hackBurst/" + from + "/");
                return ref.orderByChild(key).equalTo(value);
            }

            var getLevels = function() {
                var myDataRef = new Firebase("https://hackburst-41acc.firebaseio.com/hackBurst/Levels");
                return myDataRef;
            };

            var getQuestions = function() {
                var myDataRef = new Firebase("https://hackburst-41acc.firebaseio.com/hackBurst/Questions");
                return myDataRef;
            };

            var getHints = function() {
                var myDataRef = new Firebase("https://hackburst-41acc.firebaseio.com/hackBurst/Hints");
                return myDataRef;
            };

            return {
                where: where,
                getLevels : getLevels,
                getQuestions : getQuestions,
                getHints : getHints
            }
        }]);
})();
