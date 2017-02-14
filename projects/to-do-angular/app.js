let app = angular.module('todoApp', []);

// get data from the LocalStorage


let model = {
    user : '',
}
// bool to flag the empty localStorage
let isLocalStorageEmpty = false;

if (window.localStorage['ad-todo'] == undefined) {
    
    model.items = [
        { task : 'Sample to-do', done : false},
        { task : 'Sample Completed Task', done : true},
    ];
    isLocalStorageEmpty = true;
    // remove the items after displaying
}
else if (window.localStorage['ad-todo'].length > 0) {
    model.items = JSON.parse(localStorage['ad-todo']);   
}

app.controller('todoController', function($scope) {
    $scope.todo = model;
    // function that counts the nummber of incomplete tasks
    $scope.incompleteCount = () => {
        let count = 0;
        angular.forEach($scope.todo.items, (item) => {
            if(!item.done) {
                ++count;
            }
        });
        return count;
    }

    //function that generates classs based on the number of incomplete tasks
    $scope.warningLevel = () => {
        if($scope.incompleteCount() >= 8) {
            return 'label-danger';
        } 
        else if ($scope.incompleteCount() > 3 && $scope.incompleteCount() < 8) {
            return 'label-warning';
        } 
        else {
            return 'label-success';
        }
    }

    $scope.addNewuser = (username) => {
        $scope.todo.user = username;
    }

    $scope.addNewTodo = (task) => {
        if(isLocalStorageEmpty){
            $scope.todo.items = [];
            isLocalStorageEmpty = false;
        }
        $scope.todo.items.push({task, done : false});
        window.localStorage['ad-todo'] = angular.toJson($scope.todo.items); // to avoid $hashkey
    }
});
