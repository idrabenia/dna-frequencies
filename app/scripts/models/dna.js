(function () {
    "use strict";

    /**
     * Class represent DNA-sequence
     * @param {string} dnaSequence
     * @constructor
     */
    function Dna(dnaSequence) {
        var self = this;

        /**
         * Object constructor implementation
         */
        function init () {
            self.sequence = dnaSequence || '';
        }

        init();

        /**
         * Function calculate frequency of specified symbol in DNA sequence
         *
         * @param {string} dna
         * @param {string} character
         * @returns {number} frequency of specified symbol in DNA sequence
         */
        function calculatePercentage(dna, character) {
            var countOfCharacters = 0;
            _.each(dna, function (curCharacter) {
                if (curCharacter === character) {
                    countOfCharacters += 1;
                }
            });

            return countOfCharacters / dna.length * 100;
        }

        /**
         * Method calculate frequencies of symbols in DNA sequence
         *
         * @returns {Array} Arrays that contains C, G, T, A symbols frequencies in DNA sequence
         */
        self.frequencies = function () {
            return _(['C', 'G','T', 'A']).map(_.partial(calculatePercentage, self.sequence));
        };
    }


    angular.module('binaApp.models.dna', [])

        .factory('Dna', function () {
            return Dna;
        });
})();
