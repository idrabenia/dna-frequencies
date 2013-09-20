'use strict';

describe('DNA', function () {

    // load the controller's module
    beforeEach(module('binaApp.models.dna'));

    var DnaConstructor;

    // Initialize the controller and a mock scope
    beforeEach(inject(function (Dna) {
        DnaConstructor = Dna;
    }));

    it('should calculate frequencies of specified symbol', function () {
        var dna = new DnaConstructor('AACCTTGG');

        var frequencies = dna.frequencies();

        /* 'C', 'G','T', 'A' */
        expect(frequencies[0]).toBe(25);
        expect(frequencies[1]).toBe(25);
        expect(frequencies[2]).toBe(25);
        expect(frequencies[3]).toBe(25);
    });
});
