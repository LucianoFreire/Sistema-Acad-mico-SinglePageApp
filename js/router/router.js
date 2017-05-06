
angular.module("singlepageapp").config(["$routeProvider", function ($routeProvider) {

        $routeProvider.when("/", {
            templateUrl: "view/home.html",
            controller: "homeController"
        });

        $routeProvider.when("/cadastro", {
            templateUrl: "view/cadastro.html",
            controller: "cadastroController"
        });

        $routeProvider.when("/curso", {
            templateUrl: "view/curso.html",
            controller: "cursoController"
        });

        $routeProvider.when("/cadastrocurso", {
            templateUrl: "view/cadastrocurso.html",
            controller: "cadastroCursoController"
        });

        $routeProvider.when("/disciplina", {
            templateUrl: "view/disciplina.html",
            controller: "disciplinaController"
        });

        $routeProvider.when("/cadastrodisciplina", {
           templateUrl: "view/cadastrodisciplina.html",
           controller: "cadastroDisciplinaController"
        });

        $routeProvider.when("/aluno", {
            templateUrl: "view/aluno.html",
            controller: "alunoController"
        });

        $routeProvider.when("/cadastroaluno", {
            templateUrl: "view/cadastroaluno.html",
            controller: "cadastroAlunoController"
        });

        $routeProvider.when("/matricula", {
        templateUrl: "view/matricula.html",
        controller: "matriculaController"
        });

    }]);