(function () {
    'use strict';

    angular.module('binaApp.controllers.dna-frequencies', [
            'binaApp.models.dna'
        ])

        .controller('DnaFrequenciesCtrl', ['$scope', 'Dna', function ($scope, Dna) {

            /**
             * View initialization function
             */
            function init () {
                $scope.dnaList = [];
                $scope.newDna = new Dna();
            }

            init();

            /**
             * Function move DNA sequence from form to in-memory storage, and reset form
             */
            $scope.addDna = function () {
                $scope.dnaList.push($scope.newDna);
                $scope.newDna = new Dna();
            };

            /**
             * Checks when field contains error value
             *
             * @param {Field} field
             * @param {string} type
             * @returns {boolean} returns true if field is not pass validation; otherwise returns false.
             */
            $scope.hasError = function(field, type) {
                return field.$dirty && field.$error[type] && field.$viewValue != null;
            };

        }]);

})();