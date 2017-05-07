/**
 * Created by LucianoFreire on 05/05/2017.
 */

angular.module("singlepageapp")
    .controller("matriculaController", function ($scope, SistemaAcademicoAPIService, $location, toastr) {

        $scope.disciplinas = [];

        $scope.cursos = [];

        $scope.alunos = [];

        $scope.semestre = [];



        var listarDisciplina = function () {
            var listar = function (dados) {
                $scope.disciplinas = dados.data;
            };
            var erro = function (err) {
                toastr.warning("Erro na Listagem das Disciplinas!", {closeButton: true} + err);
            };

            SistemaAcademicoAPIService.listarDisciplina().then(listar, erro);

        };

        var listarCursos = function () {
            var listar = function (dados) {
                $scope.cursos = dados.data;

            };

            var erro = function (err) {
                toastr.warning("Erro na Listagem dos Cursos!", {closeButton: true} + err);
            };

            SistemaAcademicoAPIService.listarCursos().then(listar, erro);

        };

        $scope.buscarDisciplinaPorCurso = function (id) {

            if (id) {
                var sucesso = function (dados) {
                    $scope.disciplinas = dados.data;
                };
                var erro = function (err) {
                    toastr.warning("Erro na listagem por Curso!", {closeButton: true} + err);
                };
                SistemaAcademicoAPIService.buscarDisciplinaPorCurso(id).then(sucesso, erro);
            } else {
                listarDisciplina();
            }
        };


        var listagemTodosCursos = function () {

            var listar = function (dados) {
                $scope.cursos = dados.data;
            };

            var erro = function (err) {
                toastr.warning("Erro na Listagem de Todos os Cursos!", {closeButton: true} + err);
            };

            SistemaAcademicoAPIService.listagemTodosCursos().then(listar, erro);

        };

        var listarTodosSemestres = function(){

            var sucesso = function(dados){
                $scope.semestre = dados.data;
            };

            var erro = function(err){
                toastr.warning("Erro na Listagem de Todos os Semestres!", {closeButton: true} + err);
            };

            SistemaAcademicoAPIService.listarTodosSemestres().then(sucesso,erro);
        };

        $scope.listarAlunoPorDisciplina = function (id){

            if(id){
                var sucesso = function(dados){
                    $scope.alunos = dados.data;
                };

                var erro = function(err){
                    toastr.warning("Erro na Listagem de Alunos!", {closeButton: true} + err);

                };
                SistemaAcademicoAPIService.listarAlunoPorDisciplina(id).then(sucesso,erro);
            }else{
                $scope.alunos = [];
            }

        };

        var listarAluno = function () {
            var listar = function (dados) {
                $scope.alunos = dados.data;
            };
            var erro = function (err) {
                toastr.warning("Erro na Listagem dos Alunos!", {closeButton: true} + err);
            };

            SistemaAcademicoAPIService.listarAluno().then(listar, erro);

        };


        $scope.buscarDisciplinaPorCurso(0);
        listarCursos();
        listarDisciplina();
        listagemTodosCursos();
        listarTodosSemestres();
        listarAluno();


    });
