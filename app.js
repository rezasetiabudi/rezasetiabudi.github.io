var classApp = angular.module('myApp', ['ngRoute']);

classApp.config(function($routeProvider){
  $routeProvider.when('/',{
    templateUrl : 'login.html',
    controller : 'login'
  })
  .when('/home',{
    templateUrl : 'home.html',
    controller : 'home'
  })
  .when('/about',{
    templateUrl : 'profile.html'
  })
  .when('/detailCurug',{
    templateUrl : 'details.html',
    controller : 'detailCtrl1'
  })
  .when('/detailSerpong',{
    templateUrl : 'details.html',
    controller : 'detailCtrl2'
  })
  .when('/detailTangerang',{
    templateUrl : 'details.html',
    controller : 'detailCtrl3'
  })
  .when('/cv',{
    templateUrl : 'cv.html'
  })
});


classApp.controller('home', function($scope, $http) {
  var obj = $scope;

  var apiKey = "b3c649ed82af83eb006ab9598efaa77f";
  var openWeatherURL = "https://api.openweathermap.org/data/2.5/box/city?bbox=106.508331,-6.31694,106.664169,-6.09889,10" + "&appid=" + apiKey;

  $http.get(openWeatherURL).then(function(response) {
    obj.description = response.data.list[0].weather[0].description;
    obj.mainWeatherDescription = response.data.list[0].weather[0].main;
    obj.name = response.data.list[0].name;
    obj.icon = "http://openweathermap.org/img/w/" + response.data.list[0].weather[0].icon + ".png";

    obj.description1 = response.data.list[1].weather[0].description;
    obj.mainWeatherDescription1 = response.data.list[1].weather[0].main;
    obj.name1 = response.data.list[1].name;
    obj.icon1 = "http://openweathermap.org/img/w/" + response.data.list[1].weather[0].icon + ".png";

    obj.description2 = response.data.list[2].weather[0].description;
    obj.mainWeatherDescription2 = response.data.list[2].weather[0].main;
    obj.name2 = response.data.list[2].name;
    obj.icon2 = "http://openweathermap.org/img/w/" + response.data.list[2].weather[0].icon + ".png";

      //console.log(data.weather[0].main)
  });
//  obj.auth = "logout"
});


classApp.controller('detailCtrl1', function($scope, $http) {
  var dtl = $scope;

  var apiKey = "b3c649ed82af83eb006ab9598efaa77f";
  var openWeatherURL = "https://api.openweathermap.org/data/2.5/box/city?bbox=106.508331,-6.31694,106.664169,-6.09889,10" + "&appid=" + apiKey;

  $http.get(openWeatherURL).then(function(response) {
    dtl.description = response.data.list[0].weather[0].description;
    dtl.mainWeatherDescription = response.data.list[0].weather[0].main;
    
    dtl.speed = (2.237 * response.data.list[0].wind.speed).toFixed(1) + " mph";
    dtl.name = response.data.list[0].name;
    dtl.temp = response.data.list[0].main.temp + "°C";
    dtl.tempMin = response.data.list[0].main.temp_min + " °C";
    dtl.tempMax = response.data.list[0].main.temp_max + " °C";
    dtl.humid = response.data.list[0].main.humidity
    dtl.icon = "http://openweathermap.org/img/w/" + response.data.list[0].weather[0].icon + ".png";
    dtl.lat = response.data.list[0].coord.Lat;
    dtl.lon = response.data.list[0].coord.Lon;
  });
});

classApp.controller('detailCtrl2', function($scope, $http) {
  var dtl = $scope;

  var apiKey = "b3c649ed82af83eb006ab9598efaa77f";
  var openWeatherURL = "https://api.openweathermap.org/data/2.5/box/city?bbox=106.508331,-6.31694,106.664169,-6.09889,10" + "&appid=" + apiKey;

  $http.get(openWeatherURL).then(function(response) {
    dtl.description = response.data.list[1].weather[0].description;
    dtl.mainWeatherDescription = response.data.list[1].weather[0].main;
    
    dtl.speed = (2.237 * response.data.list[1].wind.speed).toFixed(1) + " mph";
    dtl.name = response.data.list[1].name;
    dtl.temp = response.data.list[1].main.temp + "°C";
    dtl.tempMin = response.data.list[1].main.temp_min + " °C";
    dtl.tempMax = response.data.list[1].main.temp_max + " °C";
    dtl.humid = response.data.list[1].main.humidity
    dtl.icon = "http://openweathermap.org/img/w/" + response.data.list[1].weather[0].icon + ".png";
    dtl.lat = response.data.list[1].coord.Lat;
    dtl.lon = response.data.list[1].coord.Lon;
  });
});

classApp.controller('detailCtrl3', function($scope, $http) {
  var dtl = $scope;

  var apiKey = "b3c649ed82af83eb006ab9598efaa77f";
  var openWeatherURL = "https://api.openweathermap.org/data/2.5/box/city?bbox=106.508331,-6.31694,106.664169,-6.09889,10" + "&appid=" + apiKey;

  $http.get(openWeatherURL).then(function(response) {
    dtl.description = response.data.list[2].weather[0].description;
    dtl.mainWeatherDescription = response.data.list[2].weather[0].main;
    
    dtl.speed = (2.237 * response.data.list[2].wind.speed).toFixed(1) + " mph";
    dtl.name = response.data.list[2].name;
    dtl.temp = response.data.list[2].main.temp + "°C";
    dtl.tempMin = response.data.list[2].main.temp_min + " °C";
    dtl.tempMax = response.data.list[2].main.temp_max + " °C";
    dtl.humid = response.data.list[2].main.humidity
    dtl.icon = "http://openweathermap.org/img/w/" + response.data.list[0].weather[0].icon + ".png";
    dtl.lat = response.data.list[2].coord.Lat;
    dtl.lon = response.data.list[2].coord.Lon;
  });
});

classApp.controller('login', function($scope, $location){
  $scope.submit = function(){
    var uname = $scope.username;
    var password = $scope.password;
    if($scope.username == 'admin' && $scope.password == 'admin'){
      $location.path('/home');
    }
  };
});

