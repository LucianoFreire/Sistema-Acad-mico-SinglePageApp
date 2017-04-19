angular.module("singlepageapp")
    .controller("cadastroAlunoController", function ($scope, SistemaAcademicoAPIService, $location, toastr) {

        $scope.cursos = [];

        $scope.cadastrarAluno = function (aluno) {

            SistemaAcademicoAPIService.cadastrarAluno(aluno).then(function (dados) {
                toastr.success("Aluno Cadastrado com Sucesso!", {closeButton: true});
                $location.url("/");
            }, function (err) {
                toastr.error("Erro ao Tentar Cadastrar Aluno!", {closeButton: true});
            });
        }


        var listarCursos = function () {
            var listar = function (dados) {
                $scope.cursos = dados.data;

            };
            var erro = function (err) {
                toastr.warning("Erro na Listagem dos Cursos!", {closeButton: true} + err);
            };

            SistemaAcademicoAPIService.listarCursos().then(listar, erro);

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

        listarCursos();
        listagemTodosCursos();

    });
