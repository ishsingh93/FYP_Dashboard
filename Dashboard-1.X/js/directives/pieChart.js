app.directive('pieChart', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'js/directives/pieChart.html' 
  }; 
});