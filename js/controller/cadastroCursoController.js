angular.module("singlepageapp")
    .controller("cadastroCursoController", function ($scope, SistemaAcademicoAPIService, $location, toastr) {

    $scope.cadastrarCurso = function (curso) {

        SistemaAcademicoAPIService.cadastrarCurso(curso).then(function (dados) {
            toastr.success('Curso Cadastrado com sucesso!', {closeButton: true});
            $location.url("/");
        }, function (err) {
            toastr.error('Erro ao Tentar Cadastrar Curso!', {closeButton: true});
        });
    }

});