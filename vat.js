angular.module('vat', [])
.controller('vat', function($scope){
    $scope.checkVat = function(){
        if($scope.vatValue.toString().length > 0){
        	if(isNaN($scope.vatValue)){
        		$scope.vatError = true;
        	}

          if($scope.vatValue.toString().length > 10 || $scope.vatValue.toString().length < 6){
                  $scope.vatError = true;
               }else{
                 var v = 753217532; // the control key
                 var c1 = $scope.vatValue % 10;
                 var cif = parseInt($scope.vatValue / 10);
                 var t = 0;
                 while(cif > 0){
                   t += (cif % 10) * (v % 10);
                   cif = parseInt(cif / 10);
                   v = parseInt(v / 10);
                 }
                var c2 = t * 10 % 11;
                if(c2 == 10){
                  c2 = 0;
                 }

                if (c1 === c2){
        	      $scope.vatError = false;
        	      return true;
                }else{ $scope.vatError = true; }
              }
        }else{
            $scope.vatError = false;
        }
    }
});
