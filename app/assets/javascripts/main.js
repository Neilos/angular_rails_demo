var app = angular.module('StockWatch', ['ngResource']);

// make angular work with turbolinks
$(document).on('page:load', function () {
  $('[ng-app]').each(function () {
    module = $(this).attr('ng-app');
    angular.bootstrap(this, [module]);
  });
});
