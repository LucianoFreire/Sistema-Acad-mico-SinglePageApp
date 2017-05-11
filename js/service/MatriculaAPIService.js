/**
 * Created by LucianoFreire on 03/05/2017.
 */

angular.module("singlepageapp").factory("MatriculaAPIService", function($http){

    var _listarTodosSemestres = function(){

        return $http({
            method:"GET",
            url:"http://siscadcpwiv.herokuapp.com/semestre/list/",
        });
    };

    return{

        listarTodosSemestres: _listarTodosSemestres

    }

});
