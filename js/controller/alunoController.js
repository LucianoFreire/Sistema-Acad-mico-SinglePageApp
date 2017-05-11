/**
 * Created by LucianoFreire on 12/04/2017.
 */

angular.module("singlepageapp").controller("AlunoController", function
    ($scope, AlunoAPIService, CursoAPIService, toastr) {


    $scope.varAluno = {};
    $scope.aluno = [];
    $scope.curso = [];
    $scope.pagina = 1;


    var listarAlunos = function () {

        var sucesso = function (dados) {
            $scope.aluno = dados.data;
        };

        var erro = function (err) {
            toastr.warning("Erro na Listagem de Alunos", {closeButton: true} + err);
        };

        AlunoAPIService.listarAlunos().then(sucesso, erro);
    };

    $scope.proxPag = function (pagina) {
        $scope.pagina = pagina + 1;
        AlunoAPIService.listarAlunosPorPagina($scope.pagina).then(function (dados) {
            if (!dados.data.length == 0) {
                $scope.aluno = dados.data;
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

        AlunoAPIService.listarAlunosPorPagina($scope.pagina).then(function (dados) {
            if (!dados.data.length == 0) {
                $scope.aluno = dados.data;
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
            toastr.warning("Erro na Listagem Cursos", {closeButton: true} + err);
        };

        CursoAPIService.listarTodosCursos().then(sucesso, erro);

    };

    var buscarPorAluno = function () {

        var sucesso = function (dados) {
            $scope.aluno = dados.data;
        };

        var erro = function (err) {
            toastr.warning("Erro Listagem por Aluno", {closeButton: true} + err);
        };

        AlunoAPIService.listarAlunos().then(sucesso, erro);

    };

    $scope.buscarAlunoPorCurso = function (id) {

        if (id) {
            var sucesso = function (dados) {
                $scope.aluno = dados.data;
            };

            var erro = function (err) {
                toastr.warning("Erro na Busca por Curso", {closeButton: true} + err);

            };
            AlunoAPIService.buscarAlunoPorCurso(id).then(sucesso, erro);
        } else {
            listarAlunos();
        }
        ;
    };

    $scope.salvarAluno = function (aluno) {

        AlunoAPIService.salvarAluno(aluno).then(function (dados) {
            toastr.success('Aluno cadastrado com Sucesso!', {closeButton: true});
        }, function (err) {
            toastr.warning("Erro no Cadastro de Aluno", {closeButton: true} + err);
        });
    };

    $scope.buscarAlunoPorCurso(0);
    listarAlunos();
    buscarPorAluno();
    listarTodosCursos();


});
