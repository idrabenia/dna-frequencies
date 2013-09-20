'use strict';

describe('DNA', function () {

    // load the controller's module
    beforeEach(module('binaApp.models.dna'));

    var DnaConstructor;

    // Initialize the controller and a mock scope
    beforeEach(inject(function (Dna) {
        DnaConstructor = Dna;
    }));

    it('should calculate frequencies of symbols in specified sequence', function () {
        var dna = new DnaConstructor('AACCTTGG');

        var frequencies = dna.frequencies();

        /* 'C', 'G','T', 'A' */
        expect(frequencies).toEqual([25, 25, 25, 25]);
    });

    it('should return zero percentage if symbol is not exists in sequence', function () {
        var dna = new DnaConstructor('AACC');

        var frequencies = dna.frequencies();

        /* 'C', 'G','T', 'A' */
        expect(frequencies).toEqual([50, 0, 0, 50]);
    });

    it('should return zero percentages for empty string', function () {
        var dna = new DnaConstructor('');

        var frequencies = dna.frequencies();

        expect(frequencies).toEqual([0, 0, 0, 0]);
    });

});
