app.directive('histogramChart', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'js/directives/histogramChart.html' 
  }; 
});