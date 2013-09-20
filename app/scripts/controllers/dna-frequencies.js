(function () {
    'use strict';

    angular.module('binaApp.controllers.dna-frequencies', [
            'ui.bootstrap.tooltip',
            'ui.bootstrap.progressbar',
            'binaApp.models.dna'
        ])

        .controller('DnaFrequenciesCtrl', ['$scope', 'Dna', function ($scope, Dna) {

            function init () {
                $scope.dnaList = [];
                $scope.newDna = new Dna();
            }

            init();

            $scope.addDna = function (form) {
                $scope.dnaList.push($scope.newDna);
                $scope.newDna = new Dna();
            };

        }]);

})();