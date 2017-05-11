/**
 * Created by LucianoFreire on 12/04/2017.
 */

angular.module("singlepageapp").controller("CursoController", function
    ($scope, CursoAPIService, toastr) {

    $scope.curs = {};
    $scope.curso = [];
    $scope.pagina = 1;

    var listarCursos = function () {
        var sucesso = function (dados) {
            $scope.curso = dados.data;
        };

        var erro = function (err) {
            toastr.warning("Erro na Listagem", {closeButton: true} + err);
        };

        CursoAPIService.listarCursos().then(sucesso, erro);
    };

    $scope.proxPag = function (pagina) {
        $scope.pagina = pagina + 1;
        CursoAPIService.listarCursoPorPagina($scope.pagina).then(function (dados) {
            if (!dados.data.length == 0) {
                $scope.curso = dados.data;
            }
            ;
        }, function (err) {
            toastr.warning("Erro", {closeButton: true} + err);
        });
    };

    $scope.voltarPag = function (pagina) {
        $scope.pagina = pagina - 1;
        if ($scope.pagina == 0) {
            $scope.pagina = 1;
        }

        CursoAPIService.listarCursoPorPagina($scope.pagina).then(function (dados) {
            if (!dados.data.length == 0) {
                $scope.curso = dados.data;
            }
        }, function (err) {
            toastr.warning("Erro", {closeButton: true} + err);
        });
    };

    $scope.salvarCurso = function (curso) {

        CursoAPIService.salvarCurso(curso).then(function (dados) {
            toastr.success('Curso cadastrado com sucesso!', {closeButton: true});
        }, function (err) {
            toastr.warning("Erro ao cadastrar Curso!", {closeButton: true} + err);
        });
    };

    listarCursos();


});
