// Create app
var myApp = angular.module('myApp', ['ui.router'])

// Configure app

// Config route provider
myApp.config(function($stateProvider) {
    $stateProvider.state('home', {
        url:'/',
        templateUrl: 'templates/home.html',
        controller: 'HomeController',
    })
    // Configure states for "content" and "about"
    .state('content', {
        url:'/content',
        templateUrl: 'templates/content.html',
        controller: 'ContentController',
    })
    
    .state('about', {
        url:'/about',
        templateUrl: 'templates/about.html',
        controller: 'AboutController',
    })
})

// Landing page controller: define $scope.number as a number
.controller('HomeController', function($scope){
  $scope.number = 11
})


// About page controller: define $scope.about as a string
.controller('AboutController', function($scope){
  $scope.about = "lulz"
})


// Content controller: define $scope.url as an image
.controller('ContentController', function($scope){
  $scope.url = "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSxQsAjBs4XP8pRpolc0sccO7TP_VyPme985MFZrtFVH8hB5ueGBA"
})
