var app = angular.module('ClientApp', []);
app.controller('ClientController', ($scope) => {

    
    $scope.client = {};
    $scope.clients = new Array();
   

    $scope.addClient = () => {
        $scope.clients.push({
            clientMail: $scope.client.clientMail,
        }); 
    }

    $scope.deleteClient = (i) => {
        $scope.clients.splice(i, 1);
    }
}); 