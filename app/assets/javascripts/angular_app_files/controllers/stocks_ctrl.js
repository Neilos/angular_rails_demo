app.controller('StockCtrl', ['$scope', '$resource', function($scope, $resource) {
  var Stocks = $resource('/api/stocks');
  $scope.stocks = Stocks.query();
}]);