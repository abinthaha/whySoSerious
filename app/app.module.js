(function() {
    'use strict';

    angular.module('whySoSerious', [
            'ui.router',
            'firebase',
            'whySoSerious.home',
            'whySoSerious.login',
            'whySoSerious.levels'
        ])
        .config(['$urlRouterProvider', '$httpProvider', routeConfig])
        .constant('ROOT', './app/components');

    /* @ngInject */

    function routeConfig($urlRouterProvider, $httpProvider) {
        $urlRouterProvider.otherwise('/home');

        var config = {
            apiKey: 'AIzaSyCsOExoOWeKJZMn2V119gqYPb5BvuCh2L0',
            authDomain: 'hackburst-41acc.firebaseapp.com',
            databaseURL: 'https://hackburst-41acc.firebaseio.com/',
            storageBucket: 'gs://hackburst-41acc.appspot.com'
        };

        firebase.initializeApp(config);
    }
})();
