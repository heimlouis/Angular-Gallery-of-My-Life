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
            photo: 'server/public/images/Quinton.jpg',
            likes: 0
        },
        {
            name: 'Maxwell',
            photo: 'server/public/images/Maxwell.jpg',
            likes: 0
        },
        {
            name: 'Our wedding',
            photo: 'server/public/images/OurWedding.jpg',
            likes: 0
        },
        {
            name: 'MG last drive',
            photo: 'server/public/images/MGLastDrive.jpg',
            likes: 0
        },
        {
            name: 'First Corvette',
            photo: 'server/public/images/FirstCorvette.jpg',
            likes: 0
        },
        {
            name: 'Casper and Igor',
            photo: 'server/public/images/Casper.jpg',
            likes: 0
        }
    ];
    $scope.plusOne = function(i){
        self.picturesArray[i].likes += 1;
        console.log('in likes counter');
    };
}]);