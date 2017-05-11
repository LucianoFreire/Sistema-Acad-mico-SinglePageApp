/**
 * Created by LucianoFreire on 13/04/2017.
 */

angular.module("singlepageapp").controller("DisciplinaController", function
    ($scope, DisciplinaAPIService, CursoAPIService, toastr) {

    $scope.varDisciplina = {};
    $scope.disciplina = [];
    $scope.curso = [];
    $scope.pagina = 1;

    var listarDisciplinas = function () {

        var sucesso = function (dados) {
            $scope.disciplina = dados.data;
        };

        var erro = function (err) {
            toastr.warning("Erro na Listagem", {closeButton: true} + err);
        };

        DisciplinaAPIService.listarDisciplinas().then(sucesso, erro);
    };

    $scope.proxPag = function (pagina) {
        $scope.pagina = pagina + 1;
        DisciplinaAPIService.listarDisciplinaPorPagina($scope.pagina).then(function (dados) {
            if (!dados.data.length == 0) {
                $scope.disciplina = dados.data;
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

        DisciplinaAPIService.listarDisciplinaPorPagina($scope.pagina).then(function (dados) {
            if (!dados.data.length == 0) {
                $scope.disciplina = dados.data;
            }
        }, function (err) {
            toastr.warning("Erro", {closeButton: true} + err);
        });
    };

    var listarTodosCursos = function () {

        var sucesso = function (dados) {
            $scope.curso = dados.data;
        };

        var erro = function (err) {
            toastr.warning("Erro na Listagen Todos Cursos", {closeButton: true} + err);
        };

        CursoAPIService.listarTodosCursos().then(sucesso, erro);

    };


    var buscarPorDisciplina = function () {

        var sucesso = function (dados) {
            $scope.disciplina = dados.data;
        };

        var erro = function (err) {
            toastr.warning("Erro Listagem por Disciplina", {closeButton: true} + err);
        };

        DisciplinaAPIService.listarDisciplinas().then(sucesso, erro);

    };

    $scope.buscarDisciplinaPorCurso = function (id) {

        if (id) {
            var sucesso = function (dados) {
                $scope.disciplina = dados.data;
            };
            var erro = function (err) {
                toastr.warning("Erro na listagem por curso", {closeButton: true} + err);
            };
            DisciplinaAPIService.buscarDisciplinaPorCurso(id).then(sucesso, erro);
        } else {
            listarDisciplinas();
        }
    };

    $scope.salvarDisciplina = function (disciplina) {

        DisciplinaAPIService.salvarDisciplina(disciplina).then(function (dados) {
            toastr.success('Disciplina cadastrada com sucesso!', {closeButton: true});
        }, function (err) {
            toastr.warning("Erro no cadastro de disciplina", {closeButton: true} + err);

        });
    };

    $scope.buscarDisciplinaPorCurso(0);
    listarDisciplinas();
    listarTodosCursos();
    buscarPorDisciplina();

});
