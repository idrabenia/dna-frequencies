(function () {
    'use strict';

    angular.module('binaApp.controller.dna-frequences', ['binaApp.model.dna'])

        .controller('MainCtrl', ['$scope', 'Dna', function ($scope, Dna) {

            function init () {
                $scope.dnaList = [];
                $scope.newDna = new Dna();
            }

            init();

            $scope.addDna = function () {
                $scope.dnaList.push($scope.newDna);
                $scope.newDna = new Dna();
            };

        }]);

})();