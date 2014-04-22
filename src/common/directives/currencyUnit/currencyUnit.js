'use strict';

angular.module('directives').directive('currencyUnit', function ($currency) {

  return {
    restrict: 'EAC',
    templateUrl: 'common/directives/currencyUnit/templates/currencyUnit.html',
    scope: true,
    replace: true,
    link: function (scope) {
      scope.$currency = $currency;
    }
  };

});
