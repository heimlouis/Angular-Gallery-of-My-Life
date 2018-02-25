// First parameter ties to the ng-app in HTML
// Second array parameter is an array of dependencies
const app = angular.module('vm', []);

//Controller
app.controller('MainController', ['$scope', function($scope) {
  let self = this;
  self.title = 'Gallary of My Life';
    self.picturesArray = [
        {
            name: 'Quinton',
            photo: 'images/Quinton.jpg',
            likes: 0
        },
        {
            name: 'Maxwell',
            photo: 'images/Maxwell.jpg',
            likes: 0
        },
        {
            name: 'Our wedding',
            photo: 'images/OurWedding.jpg',
            likes: 0
        },
        {
            name: 'MG last drive',
            photo: 'images/MGLastDrive.jpg',
            likes: 0
        },
        {
            name: 'First Corvette',
            photo: 'images/FirstCorvette.jpg',
            likes: 0
        },
        {
            name: 'Casper and Igor',
            photo: 'images/Casper.jpg',
            likes: 0
        }
    ];
    $scope.plusOne = function(i){
        self.picturesArray[i].likes += 1;
        console.log('in likes counter');
    };
}]);