(function() {
    'use strict';
    
    const myDataFile = './data/dataFile.json';

    angular.module('classified').factory('classifiedFactory', function($http) {
        
        let getClassifiedData = function() {
            return $http.get(myDataFile);
        }

        return {
            getClassifiedData : getClassifiedData
        }
    })
})();