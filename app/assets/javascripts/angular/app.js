var app = angular.module('StockWatch', ['ngResource', 'ui.select2']);

// make angular work with turbolinks
$(document).on('page:load', function () {
  $('[ng-app]').each(function () {
    module = $(this).attr('ng-app');
    angular.bootstrap(this, [module]);
  });
});
