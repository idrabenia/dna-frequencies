'use strict';

angular.module('binaApp')

    .controller('MainCtrl', function ($scope) {
        $scope.dnaList = [];

        $scope.addDna = function () {
            $scope.dnaList.push($scope.newDna);
            $scope.newDna = '';
        };

        function calculatePercentage(dna, character) {
            var countOfCharacters = 0;
            _(dna).each(function (curCharacter) {
                if (curCharacter === character) {
                    countOfCharacters += 1;
                }
            });

            return countOfCharacters * 100 / dna.length;
        }

        $scope.frequencies = function (dna) {
            return _(['A', 'T', 'G', 'C']).map(_.partial(calculatePercentage, dna));
        };
    });
