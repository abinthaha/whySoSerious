(function() {
    'use strict';

    angular.module('whySoSerious.levels')
        .controller('questionCtrl', questionCtrl);
    /* @ngInject */
    function questionCtrl() {

    	$scope.questions = [
    		{
    			'dialog': 'Why so serious? Let’s put a smile on that face.'
    			'answer': 'dark knight',
    			'hint': 'Bat'
    		},
    		{
    			'dialog': 'I’ll make him an offer he can’t refuse..'
    			'answer': 'The godFather',
    			'hint': 'father'
    		},
    	]


    	$scope.showHintsForTheQuestion = function () {
    		
    	}
    }
})();
