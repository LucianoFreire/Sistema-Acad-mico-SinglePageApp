/**
 * Created by lucia on 14/04/2017.
 */

angular.module("singlepageapp")
    .controller("homeController", function ($scope, SistemaAcademicoAPIService, $location, toastr) {

    $scope.salvarHome = function (home) {

        SistemaAcademicoAPIService.salvarHome(home).then(function (dados) {
            toastr.success("Salvo na Tabela com sucesso!",{closeButton: true});
            $location.url("/");
        }, function (err) {
            toastr.error("Erro ao SALVAR!",{closeButton: true});
        });
    }

});

