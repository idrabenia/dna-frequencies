'use strict';

describe('Controller: DnaFrequenciesCtrl', function () {

    // load the controller's module
    beforeEach(module('binaApp.controllers.dna-frequencies'));

    var Ctrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, Dna) {
        scope = $rootScope.$new();
        Ctrl = $controller('DnaFrequenciesCtrl', {
            $scope: scope,
            Dna: Dna
        });
    }));


    it('after initialization scope should contains dna list and new dna model', function () {
        expect(scope.dnaList.length).toBe(0);
        expect(scope.newDna).toBeDefined();
    });


    it('should allow to add dna sequence', function () {
        scope.newDna.sequence = 'AATTFFTT';

        scope.addDna();

        expect(scope.dnaList.length).toBe(1);
        expect(scope.newDna.sequence).toBe('');
    });


    it('should allow to check errors in form', function () {
        var field = { $dirty: true, $error: { required: true } };

        var hasError = scope.hasError(field, 'required');

        expect(hasError).toBe(true);
    });


    it('should hide errors when form is fresh', function () {
        var field = { $dirty: false, $error: { required: true } };

        var hasError = scope.hasError(field, 'required');

        expect(hasError).toBe(false);
    });

});
