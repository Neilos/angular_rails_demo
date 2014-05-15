var app = angular.module('StockWatch', ['ngResource']);

app.config(["$httpProvider", function($httpProvider) {
  csrfToken = $('meta[name=csrf-token]').attr('content');
  $httpProvider.defaults.headers.common['X-CSRF-Token'] = csrfToken;
}]);

// make angular work with turbolinks
$(document).on('page:load', function () {
  $('[ng-app]').each(function () {
    module = $(this).attr('ng-app');
    angular.bootstrap(this, [module]);
  });
});
