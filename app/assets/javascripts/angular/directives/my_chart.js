app.directive("myChart", function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      scope.$watch('showStockChart', function() {
        if (scope.showStockChart == true) {
          scope.loadingChart = true;
          var ohlc = [];
          scope.requestOHLC(scope.$eval(attrs.stockid)).$promise.then(function(result){
            ohlc = result.ohlc;
            angular.forEach(ohlc, function(value, index) {
              ohlc[index][0] = Date.parse(value[0]);
            })
            element.highcharts('StockChart', {
              rangeSelector: {
                buttons: [{
                  type: 'week',
                  count: 1,
                  text: '1w'
                }, {
                  type: 'month',
                  count: 1,
                  text: '1m'
                }, {
                  type: 'month',
                  count: 3,
                  text: '3m'
                }, {
                  type: 'month',
                  count: 6,
                  text: '6m'
                }, {
                  type: 'ytd',
                  text: 'YTD'
                }, {
                  type: 'all',
                  text: 'All'
                }],
                selected: 2,
                inputEnabled: window.innerWidth > 650
              },
              title: {
                text: scope.$eval(attrs.stockname)
              },
              xAxis: {
                type: 'datetime'
              },
              series: [{
                type: 'candlestick',
                name: scope.$eval(attrs.stocksymbol),
                data: ohlc
              }]
            });  
          }); 

          scope.loadingChart = false;
        } else {
          // remove chart
        }
      });
    }
  }
});