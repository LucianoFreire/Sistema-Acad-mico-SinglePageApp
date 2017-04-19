angular.module("singlepageapp")
    .controller("alunoController", function ($scope, SistemaAcademicoAPIService, $location, toastr) {

        $scope.alunos = [];

        $scope.cursos = [];

        $scope.paginas_Paginacao = 1;


        $scope.cadAluno = function (caminho) {

            $location.url(caminho);
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

        var listarAluno = function () {
            var listar = function (dados) {
                $scope.alunos = dados.data;
            };
            var erro = function (err) {
                toastr.warning("Erro na Listagem dos Alunos!", {closeButton: true} + err);
            };

            SistemaAcademicoAPIService.listarAluno().then(listar, erro);

        };

        $scope.listagemAlunoPorCurso = function (id) {

            if (id) {
                var sucesso = function (dados) {
                    $scope.alunos = dados.data;
                };

                var erro = function (err) {
                    toastr.warning("Erro na Listagem de Alunos por Curso!", {closeButton: true} + err);
                };
                SistemaAcademicoAPIService.listagemAlunoPorCurso(id).then(sucesso, erro);
            } else {
                listarAluno();
            }
            ;
        };


        $scope.cadastrarAluno = function (aluno) {

            SistemaAcademicoAPIService.cadastrarAluno(aluno).then(function (dados) {
                toastr.success("Aluno Cadastrado com Sucesso!", {closeButton: true});
            }, function (err) {
                toastr.error("Erro ao Tentar Cadastrar Aluno!", {closeButton: true});
            });
        };


        $scope.proxPag = function (paginas_Paginacao){
            $scope.paginas_Paginacao = paginas_Paginacao+1;
            SistemaAcademicoAPIService.listarAlunosPorPagina($scope.paginas_Paginacao).then(function (dados) {
                if (!dados.data.length == 0) {
                    $scope.alunos = dados.data;
                };
            },function (err){
                toastr.warning("Erro na Listagem dos Alunos!", {closeButton: true} + err);
            });
        };

        //----------------------------------------------------------------------

        $scope.voltarPag = function (paginas_Paginacao){
            $scope.paginas_Paginacao = paginas_Paginacao-1;
            if($scope.paginas_Paginacao == 0){
                $scope.paginas_Paginacao = 1;
            }

            SistemaAcademicoAPIService.listarAlunosPorPagina($scope.paginas_Paginacao).then(function (dados) {
                if (!dados.data.length == 0) {
                    $scope.alunos = dados.data;
                }
            },function (err){
                toastr.warning("Erro na Listagem dos Alunos!", {closeButton: true} + err);

            });
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


        $scope.listagemAlunoPorCurso(0);
        listarAluno();
        listarCursos();
        listagemTodosCursos();


    });
