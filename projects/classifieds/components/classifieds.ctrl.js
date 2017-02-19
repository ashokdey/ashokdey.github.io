(function() {
    'use strict';
    // refernce the classified module
    angular.module('classified').controller('classifiedCtrl', function($scope) {
        
        $scope.classifieds = [
            {
                "title" : 'Sample Item 1',
                "price" : '1000',
                "description" : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil quod culpa quae corrupti, enim ratione ab totam obcaecati tempore eos rerum voluptas deleniti incidunt deserunt ea distinctio provident, vero sunt.',
                "posted" : "2017-02-18",
                "contact" : {
                    "name" : "Jhon Doe",
                    "phone" : "1243459087",
                    "email" : "jhondoe@email.com"
                },
                "categories" : [
                    "Toys",
                    "Kids" 
                ],
                "image" : "https://static.pexels.com/photos/264889/pexels-photo-264889.jpeg",
                "views" : 213
            },
            {
                "title" : 'Sample Item 2',
                "price" : '2000',
                "description" : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil quod culpa quae corrupti, enim ratione ab totam obcaecati tempore eos rerum voluptas deleniti incidunt deserunt ea distinctio provident, vero sunt.',
                "posted" : "2017-02-15",
                "contact" : {
                    "name" : "Jhon Doe",
                    "phone" : "1243459087",
                    "email" : "jhondoe@email.com"
                },
                "categories" : [
                    "Toys",
                    "Kids" 
                ],
                "image" : "https://images.pexels.com/photos/4198/field-sport-ball-america.jpg?w=940&h=650&auto=compress&cs=tinysrgb",
                "views" : 23
            },
            {
                "title" : 'Sample Item 3',
                "price" : '1500',
                "description" : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil quod culpa quae corrupti, enim ratione ab totam obcaecati tempore eos rerum voluptas deleniti incidunt deserunt ea distinctio provident, vero sunt.',
                "posted" : "2017-02-14",
                "contact" : {
                    "name" : "Jhon Doe",
                    "phone" : "1243459087",
                    "email" : "jhondoe@email.com"
                },
                "categories" : [
                    "Toys",
                    "Kids" 
                ],
                "image" : "https://images.pexels.com/photos/6371/red-love-heart-valentines.jpg?w=940&h=650&auto=compress&cs=tinysrgb",
                "views" : 503
            },
            {
                "title" : 'Sample Item 4',
                "price" : '1200000',
                "description" : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil quod culpa quae corrupti, enim ratione ab totam obcaecati tempore eos rerum voluptas deleniti incidunt deserunt ea distinctio provident, vero sunt.',
                "posted" : "2017-02-12",
                "contact" : {
                    "name" : "Jhon Doe",
                    "phone" : "1243459087",
                    "email" : "jhondoe@email.com"
                },
                "categories" : [
                    "Toys",
                    "Kids" 
                ],
                "image" : "https://static.pexels.com/photos/50704/car-race-ferrari-racing-car-pirelli-50704.jpeg",
                "views" : 643
            },
            {
                "title" : 'Sample Item 5',
                "price" : '2300',
                "description" : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil quod culpa quae corrupti, enim ratione ab totam obcaecati tempore eos rerum voluptas deleniti incidunt deserunt ea distinctio provident, vero sunt.',
                "posted" : "2017-02-10",
                "contact" : {
                    "name" : "Jhon Doe",
                    "phone" : "1243459087",
                    "email" : "jhondoe@email.com"
                },
                "categories" : [
                    "Sports",
                    "Toys" 
                ],
                "image" : "https://static.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg",
                "views" : 213
            }
        ]
    });
})();