(function() {
    'use strict';

    let contact = {
        name : 'Jhon Doe',
        phone : 3245342312,
        email : ' jhon@email.com'
    }    

    // refernce the classified module
    angular.module('classified').controller('classifiedCtrl', 
    function($scope, classifiedFactory, $mdSidenav, $mdToast, $mdDialog) {

        $scope.categories = [];

        $scope.openSidebar = function() {
            $mdSidenav('left').open();
        }

        $scope.closeSidebar = function() {
            $mdSidenav('left').close();
        }

        classifiedFactory.getClassifiedData().then( function(classified) {
            $scope.classifieds = classified.data;
            $scope.categories = getCategory($scope.classifieds);
        }, function(err) {
            console.log('error while getting data');
        }); 

        $scope.saveClassified = function(classified) {
            if(classified) {
                classified.contact = contact;
                $scope.classifieds.push(classified);
                $scope.closeSidebar();
                $scope.showToast('Added to the listing!')
            }
        }

        $scope.deleteClassified = function(event, classified) {
            // create the md confirm 
            let confirm = $mdDialog.confirm()
                .title('Are you sure? You are deleting ' + classified.title)
                .ok('Yes Delete')
                .cancel('No, Don\'t Delete')
                .targetEvent(event);

            // show the dialog
            $mdDialog.show(confirm).then(function() {
                let index = $scope.classifieds.indexOf(classified);
                $scope.classifieds.splice(index, 1);
            }, function() {
                console.log('User do not want to delete');
            });
        }

        $scope.editClassified = function(classified) {
            $scope.editting = true;
            $mdSidenav('left').open(); 
            $scope.classified = classified;           
        }

        $scope.saveEdits = function (classified) {
            $scope.editting = false;
            $scope.classified = null;
            $scope.closeSidebar();            
            $scope.showToast('Edits Saved!');
        }

        function showToast (message) {
            $mdToast.show(
                $mdToast.simple()
                    .content(message)
                    .position('bottom right')
                    .hideDelay(3000)
            );
        }

        function getCategory(classifieds) {
            let categories = [];
            angular.forEach(classifieds, function(item) {
                angular.forEach(item.categories, function(category) {
                    categories.push(category);
                });
            });

            return _.uniq(categories);
        }

    });
})();