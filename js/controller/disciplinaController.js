angular.module("singlepageapp")
    .controller("disciplinaController", function ($scope, SistemaAcademicoAPIService, $location, toastr) {

        $scope.disciplinas = [];

        $scope.cursos = [];

        $scope.paginas_Paginacao = 1;


        $scope.cadDisc = function (caminho) {
            $location.url(caminho);
        };


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

        $scope.cadastrarDisciplina = function (disciplina) {

            SistemaAcademicoAPIService.cadastrarDisciplina(disciplina).then(function (dados) {
                toastr.success('Disciplina Cadastrada com Sucesso!', {closeButton: true});
            }, function (err) {
                toastr.error("Erro ao Tentar Cadastrar Disciplina!", {closeButton: true});
            });
        };

        $scope.proxPag = function (paginas_Paginacao){
            $scope.paginas_Paginacao = paginas_Paginacao+1;
            SistemaAcademicoAPIService.listarDisciplinaPorPagina($scope.paginas_Paginacao).then(function (dados) {
                if (!dados.data.length == 0) {
                    $scope.disciplinas = dados.data;
                };
            },function (err){
                toastr.warning("Erro na Listagem das Disciplinas!", {closeButton: true} + err);
            });
        };

        //----------------------------------------------------------------------

        $scope.voltarPag = function (paginas_Paginacao){
            $scope.paginas_Paginacao = paginas_Paginacao-1;
            if($scope.paginas_Paginacao == 0){
                $scope.paginas_Paginacao = 1;
            }

            SistemaAcademicoAPIService.listarDisciplinaPorPagina($scope.paginas_Paginacao).then(function (dados) {
                if (!dados.data.length == 0) {
                    $scope.disciplinas = dados.data;
                }
            },function (err){
                toastr.warning("Erro na Listagem das Disciplinas!", {closeButton: true} + err);

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


        $scope.buscarDisciplinaPorCurso(0);
        listarCursos();
        listarDisciplina();
        listagemTodosCursos();


    });
