(function(){
    'use strict';

    angular.module('MyForms')
        .controller('datepickerCtrl', datepickerCtrl);

    /** @ngInject */
    function datepickerCtrl($scope) {

        $scope.dt = new Date();
        $scope.options = {
            showWeeks: false
        };

    }
})();