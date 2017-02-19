let app = angular.module('classified', ['ngMaterial'])
                 .config(function($mdThemingProvider){
                     $mdThemingProvider.theme('default')
                        .primaryPalette('green')
                        .accentPalette('orange')
                        .dark();
                 });

