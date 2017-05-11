/**
 * Created by LucianoFreire on 13/04/2017.
 */

angular.module("singlepageapp").factory("CursoAPIService", function ($http) {


    var _listaTodosCursos = function () {
        return $http({
            method: "GET",
            url: "http://siscadcpwiv.herokuapp.com/curso/list/1/1000",
        });
    };

    var _listaCursos = function () {
        return $http({
            method: "GET",
            url: "http://siscadcpwiv.herokuapp.com/curso/list/1/10",
        });
    };


    var _listarCursoPorPagina = function (id) {

        return $http({
            method: "GET",
            url: "http://siscadcpwiv.herokuapp.com/curso/list/" + id + "/10",
        });
    };

    var _salvarCurso = function (dados) {
        return $http({
            method: "POST",
            url: "http://siscadcpwiv.herokuapp.com/curso/",
            data: dados
        });
    };

    return {

        listarTodosCursos: _listaTodosCursos,
        listarCursos: _listaCursos,
        listarCursoPorPagina: _listarCursoPorPagina,
        salvarCurso: _salvarCurso
    }

});