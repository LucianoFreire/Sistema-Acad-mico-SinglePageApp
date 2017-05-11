/**
 * Created by LucianoFreire on 13/04/2017.
 */

angular.module("singlepageapp").config(["$routeProvider", function ($routeProvider) {

    $routeProvider.when("/", {
        templateUrl: "view/home.html"
    });

    $routeProvider.when("/Aluno", {
        templateUrl: "view/Aluno.html",
        controller: "AlunoController"

    });

    $routeProvider.when("/CadastroDeAluno", {
        templateUrl: "view/CadastroAluno.html",
        controller: "AlunoController"
    });

    $routeProvider.when("/Curso", {
        templateUrl: "view/Curso.html",
        controller: "CursoController"
    });

    $routeProvider.when("/CadastroDeCurso", {
        templateUrl: "view/CadastroCurso.html",
        controller: "CursoController"
    });

    $routeProvider.when("/Disciplina", {
        templateUrl: "view/Disciplina.html",
        controller: "DisciplinaController"
    });

    $routeProvider.when("/CadastroDeDisciplina", {
        templateUrl: "view/CadastroDisciplina.html",
        controller: "DisciplinaController"
    });

    $routeProvider.when("/Matricula", {
        templateUrl: "view/Matricula.html",
        controller: "MatriculaController"
    });

}]);
