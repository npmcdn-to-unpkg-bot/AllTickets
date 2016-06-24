function headerDirective (){
    return{
        restrict: "AE",
        templateUrl: "header.html"
    };
};
function footerDirective (){
    return{
        restrict:"AE",
        templateUrl:"footer.html"
    };
};
(function(){  
    var app = angular.module('ticketModuleApp',[]);
    app.directive('headerDirective', headerDirective)
    app.directive('footerDirective', footerDirective)

    app.controller('formController', function ($scope) {
  $scope.formData = {};
  
  $scope.submitForm = function (formData) {
   $(".nameInput").val(" ");
   $(".messageForm").val("Datos enviados")
  };
});
})();

