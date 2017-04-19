angular.module("singlepageapp").factory("SistemaAcademicoAPIService", function ($http) {


    var _listarCursos = function () {
        return $http({
            method: "GET",
            url: "http://siscadcpwiv.herokuapp.com/curso/list/1/10",
        });
    };


    var _cadastrarCurso = function (dados) {
        return $http({
            method: "POST",
            url: "http://siscadcpwiv.herokuapp.com/curso/",
            data: dados
        });
    };

    var _listarDisciplina = function () {
        return $http({
            method: "GET",
            url: "http://siscadcpwiv.herokuapp.com/disciplina/list/1/10",
        });
    };


    var _cadastrarDisciplina = function (dados) {
        return $http({
            method: "POST",
            url: "http://siscadcpwiv.herokuapp.com/disciplina/",
            data: dados
        });
    };


    var _listarAluno = function () {
      return $http({
        method: "GET",
          url: "http://siscadcpwiv.herokuapp.com/aluno/list/1/10",
      });
    };


    var  _cadastrarAluno = function (dados) {
      return $http({
          method: "POST",
          url: "http://siscadcpwiv.herokuapp.com/aluno/",
          data: dados
      });
    };

    var _buscarDisciplinaPorCurso = function (id){

        return $http({
            method: "GET",
            url: "http://siscadcpwiv.herokuapp.com/disciplina/curso/"+id,
        });

    };

    var _listagemAlunoPorCurso = function(id){
        return $http({
            methor: "GET",
            url: "http://siscadcpwiv.herokuapp.com/aluno/curso/"+id,
        });
    };

    var _listarCursoPorPagina = function (id){

        return $http({
            method: "GET",
            url: "http://siscadcpwiv.herokuapp.com/curso/list/"+id+"/10",
        });
    };


    var _listarDisciplinaPorPagina = function (id){

        return $http({
            method: "GET",
            url: "http://siscadcpwiv.herokuapp.com/disciplina/list/"+id+"/10",
        });
    };


    var _listarAlunosPorPagina = function (id){

        return $http({
            method: "GET",
            url: "http://siscadcpwiv.herokuapp.com/aluno/list/"+id+"/10",
        });
    };

    var _listagemTodosCursos = function () {
        return $http({
            method: "GET",
            url: "http://siscadcpwiv.herokuapp.com/curso/list/1/1000",
        });
    };


    return {

        listarCursos: _listarCursos,
        cadastrarCurso: _cadastrarCurso,
        listarDisciplina: _listarDisciplina,
        cadastrarDisciplina: _cadastrarDisciplina,
        listarAluno: _listarAluno,
        cadastrarAluno: _cadastrarAluno,
        buscarDisciplinaPorCurso: _buscarDisciplinaPorCurso,
        listagemAlunoPorCurso: _listagemAlunoPorCurso,
        listarCursoPorPagina: _listarCursoPorPagina,
        listarDisciplinaPorPagina: _listarDisciplinaPorPagina,
        listarAlunosPorPagina: _listarAlunosPorPagina,
        listagemTodosCursos: _listagemTodosCursos
    }

});
