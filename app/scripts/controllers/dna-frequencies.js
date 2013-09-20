(function () {
    'use strict';

    angular.module('binaApp.controllers.dna-frequencies', [
            'binaApp.models.dna'
        ])

        .controller('DnaFrequenciesCtrl', ['$scope', 'Dna', function ($scope, Dna) {

            function init () {
                $scope.dnaList = [];
                $scope.newDna = new Dna();
            }

            init();

            $scope.addDna = function () {
                $scope.dnaList.push($scope.newDna);
                $scope.newDna = new Dna();
            };

            $scope.hasError = function(field, type) {
                return field.$dirty && field.$error[type];
            };

        }]);

})();