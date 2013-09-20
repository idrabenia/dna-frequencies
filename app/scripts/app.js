(function () {
    'use strict';


    angular.module('binaApp', [
            'binaApp.controllers.dna-frequencies',
            'ui.bootstrap.progressbar'
        ])

        .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'views/dna-frequencies.html',
                    controller: 'DnaFrequenciesCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });
        });
})();