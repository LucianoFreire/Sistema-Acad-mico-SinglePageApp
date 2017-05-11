/**
 * Created by LucianoFreire on 13/04/2017.
 */

angular.module("singlepageapp").factory("DisciplinaAPIService", function ($http) {




    var _listarTodasDisciplinas = function () {

        return $http({
            method: "GET",
            url: "http://siscadcpwiv.herokuapp.com/disciplina/list/1/1000",
        });
    };

    var _listarDisciplinas = function () {

        return $http({
            method: "GET",
            url: "http://siscadcpwiv.herokuapp.com/disciplina/list/1/10",
        });
    };


    var _listarDisciplinaPorPagina = function (id){

        return $http({
            method: "GET",
            url: "http://siscadcpwiv.herokuapp.com/disciplina/list/"+id+"/10",
        });
    };


    var _buscarDisciplinaPorCurso = function (id){

        return $http({
            method: "GET",
            url: "http://siscadcpwiv.herokuapp.com/disciplina/curso/"+id,
        });

    };


    var _carregarDisciplinaPorCurso = function (id){

        return $http({
            method: "GET",
            url: "http://siscadcpwiv.herokuapp.com/disciplina/curso/"+id,
        });

    };


    var _salvarDisciplina = function(dados){

        return $http({
            method: "POST",
            url: "http://siscadcpwiv.herokuapp.com/disciplina/",
            data: dados
        });
    };

    return {

        listarDisciplinas: _listarDisciplinas,
        listarDisciplinaPorPagina: _listarDisciplinaPorPagina,
        buscarDisciplinaPorCurso: _buscarDisciplinaPorCurso,
        salvarDisciplina: _salvarDisciplina,
        listarTodasDisciplinas: _listarTodasDisciplinas,
        carregarDisciplinaPorCurso: _carregarDisciplinaPorCurso

    }


});

