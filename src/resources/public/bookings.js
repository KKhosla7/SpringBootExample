/**
 * Created by karan.khosla on 3/4/14.
 */


function BookingCtrl($scope, $http) {
    $http.get('http://localhost:8080/bookings').
        success(function(data) {
            $scope.bookings = data;
        });
}
