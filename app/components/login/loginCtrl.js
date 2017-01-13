(function() {
    'use strict';

    angular.module('whySoSerious.login')
        .controller('loginCtrl', ['$scope', '$state', loginCtrl]);


    function loginCtrl($scope, $state) {

        $scope.processAuth = processAuth;
        $scope.signInCallback = signInCallback;
        $scope.renderSignInButton = renderSignInButton;

        function processAuth(result) {
            if (result['status']['signed_in']) {
                $state.go('levels.level');
            }
        }

        function signInCallback(authResult) {
            $scope.$apply(function() {
                $scope.processAuth(authResult);
            });
        };

        function renderSignInButton() {
            var myParams = {
                'clientid': '841678943878-dqur8hl31rc8f7gj27fv75i8bvd7pctk.apps.googleusercontent.com',
                'cookiepolicy': 'single_host_origin',
                'callback': $scope.signInCallback,
                'approvalprompt': 'force',
                'scope': 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profile.emails.read'
            };
            gapi.auth.signIn(myParams);
        }


    }
})();
