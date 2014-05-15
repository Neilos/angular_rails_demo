app.controller('StockCtrl', ['$scope', 'Stock', function($scope, Stock) {
  $scope.stocks = Stock.all();
}]);