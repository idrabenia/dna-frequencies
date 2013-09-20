(function () {
    "use strict";

    function Dna(dnaSequence) {
        var self = this;

        function init () {
            self.sequence = dnaSequence || '';
        }

        init();

        function calculatePercentage(dna, character) {
            var countOfCharacters = 0;
            _.each(dna, function (curCharacter) {
                if (curCharacter === character) {
                    countOfCharacters += 1;
                }
            });

            return countOfCharacters / dna.length * 100;
        }

        self.frequencies = function () {
            return _(['A', 'T', 'G', 'C']).map(_.partial(calculatePercentage, self.sequence));
        };
    }

    angular.module('binaApp.model.dna', [])

        .factory('Dna', function () {
            return Dna;
        });
})();
