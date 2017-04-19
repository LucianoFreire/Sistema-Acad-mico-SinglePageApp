angular.module("singlepageapp")
    .controller("cursoController", function ($scope, SistemaAcademicoAPIService, $location, toastr) {


        $scope.cursos = [];
        $scope.paginas_Paginacao = 1;


        $scope.cadCurso = function (caminho) {
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


        $scope.proxPag = function (paginas_Paginacao){
            $scope.paginas_Paginacao = paginas_Paginacao+1;
            SistemaAcademicoAPIService.listarCursoPorPagina($scope.paginas_Paginacao).then(function (dados) {
                if (!dados.data.length == 0) {
                    $scope.cursos = dados.data;
                };
            },function (err){
                toastr.warning("Erro na Listagem dos Cursos!", {closeButton: true} + err);
            });
        };

        //----------------------------------------------------------------------

        $scope.voltarPag = function (paginas_Paginacao){
            $scope.paginas_Paginacao = paginas_Paginacao-1;
            if($scope.paginas_Paginacao == 0){
                $scope.paginas_Paginacao = 1;
            }

            SistemaAcademicoAPIService.listarCursoPorPagina($scope.paginas_Paginacao).then(function (dados) {
                if (!dados.data.length == 0) {
                    $scope.cursos = dados.data;
                }
            },function (err){
                toastr.warning("Erro na Listagem dos Cursos!", {closeButton: true} + err);

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


        listarCursos();
        //listagemTodosCursos();


    });
