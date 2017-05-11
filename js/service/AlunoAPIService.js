/**
 * Created by LucianoFreire on 13/04/2017.
 */

angular.module("singlepageapp").factory("AlunoAPIService", function ($http) {


    var _listarAlunos = function () {
        return $http({
            method: "GET",
            url: "http://siscadcpwiv.herokuapp.com/aluno/list/1/10",
        });
    };

    var _listarAlunosPorPagina = function (id) {

        return $http({
            method: "GET",
            url: "http://siscadcpwiv.herokuapp.com/aluno/list/" + id + "/10",
        });
    };

    var _salvarAluno = function (dados) {
        return $http({
            method: "POST",
            url: "http://siscadcpwiv.herokuapp.com/aluno/",
            data: dados
        });
    };

    var _buscarAlunoPorCurso = function (id) {
        return $http({
            methor: "GET",
            url: "http://siscadcpwiv.herokuapp.com/aluno/curso/" + id,
        });
    };


    var _listarAlunoPorDisciplina = function (id) {
        return $http({
            method: "GET",
            url: "http://siscadcpwiv.herokuapp.com/aluno/curso/" + id,

        });
    };


    var _listarAlunoPorSemestre = function (semestre, disciplina) {
        return $http({
            method: "GET",
            url: "http://siscadcpwiv.herokuapp.com/matricula/semestre/disciplina/" + semestre + "/" + disciplina,
        });
    };

    var _salvarAlunoNaDisciplina = function (dados) {
        return $http({
            method: "POST",
            url: "http://siscadcpwiv.herokuapp.com/matricula/",
            data: dados
        });
    };

    return {
        listarAlunos: _listarAlunos,
        listarAlunosPorPagina: _listarAlunosPorPagina,
        salvarAluno: _salvarAluno,
        buscarAlunoPorCurso: _buscarAlunoPorCurso,
        listarAlunoPorDisciplina: _listarAlunoPorDisciplina,
        listarAlunoPorSemestre: _listarAlunoPorSemestre,
        salvarAlunoNaDisciplina: _salvarAlunoNaDisciplina
    }

});
