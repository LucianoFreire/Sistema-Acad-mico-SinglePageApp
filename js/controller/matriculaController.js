/**
 * Created by LucianoFreire on 03/05/2017.
 */

angular.module("singlepageapp").controller("MatriculaController", function
    ($scope, MatriculaAPIService, DisciplinaAPIService, CursoAPIService, AlunoAPIService, toastr) {


    $scope.disciplina = [];
    $scope.curso = [];
    $scope.semestre = [];
    $scope.aluno = [];
    $scope.selected = [];
    $scope.alunosParaCadastro = [];
    $scope.alunoPorSemestre = [];

    $scope.enviarAlunos = function () {
        $scope.alunosParaCadastro = [];
        for (var i = 0; i < $scope.selected.length; i++) {
            $scope.alunosParaCadastro.push($scope.selected[i]);
        }
    };

    $scope.salvarAlunoNaDisciplina = function (disciplina, semestre) {

        var vetorCadastro = [];

        for (var i = 0; i < $scope.alunosParaCadastro.length; i++) {
            var referencia = {}
            referencia.DisciplinaId = disciplina,
                referencia.AlunoId = $scope.alunosParaCadastro[i].id,
                referencia.SemestreId = semestre

            vetorCadastro.push(referencia);
        }

        var sucesso = function (dados) {
            $scope.alunosParaCadastro = dados.data;
            toastr.success('Aluno Cadastrado com sucesso!', {closeButton: true});

        };

        var erro = function (err) {
            toastr.warning("Erro de Listagem", {closeButton: true} + err);

        };

        AlunoAPIService.salvarAlunoNaDisciplina(vetorCadastro).then(sucesso, erro);
    };

    $scope.exist = function (item) {
        return $scope.selected.indexOf(item) > -1;
    }

    $scope.toggleSelection = function (item) {
        var idx = $scope.selected.indexOf(item);
        if (idx > -1) {
            $scope.selected.splice(idx, 1);
        } else {
            $scope.selected.push(item);
        }
    };


    $scope.listarAlunoPorSemestre = function (semestre, disciplina) {

        if (semestre != null) {
            var sucesso = function (dados) {
                $scope.alunoPorSemestre = dados.data;
            };

            var erro = function (err) {
                toastr.warning("Erro Listagem de Aluno por Semestre", {closeButton: true} + err);
            };
            AlunoAPIService.listarAlunoPorSemestre(semestre, disciplina).then(sucesso, erro);
        } else {
            $scope.disciplina = [];
            $scope.alunosParaCadastro = [];
            $scope.alunoPorSemestre = [];
            $scope.semestre = [];
            $scope.aluno = [];

        }

    };

    var listarTodosSemestres = function () {

        var sucesso = function (dados) {
            $scope.semestre = dados.data;
        };

        var erro = function (err) {
            toastr.warning("Erro Listagem de Semestres", {closeButton: true} + err);
        };

        MatriculaAPIService.listarTodosSemestres().then(sucesso, erro);
    };


    var listarTodosCursos = function () {


        var sucesso = function (dados) {
            $scope.curso = dados.data;
        };

        var erro = function (err) {
            toastr.warning("Erro Listagem dos Cursos", {closeButton: true} + err);
        };

        CursoAPIService.listarTodosCursos().then(sucesso, erro);

    };


    $scope.carregarDisciplinaPorCurso = function (id) {

        if (id) {
            var sucesso = function (dados) {
                $scope.disciplina = dados.data;
            };
            var erro = function (err) {
                toastr.warning("Erro ao Carregar Disciplina por Curso", {closeButton: true} + err);
            };
            DisciplinaAPIService.carregarDisciplinaPorCurso(id).then(sucesso, erro);
        } else {
            $scope.disciplina = [];
            $scope.alunosParaCadastro = [];
            $scope.alunoPorSemestre = [];
            $scope.semestre = [];
        }
    };


    $scope.buscarAlunoPorCurso = function (id) {

        if (id) {
            var sucesso = function (dados) {
                $scope.aluno = dados.data;
            };

            var erro = function (err) {
                toastr.warning("Erro Listagem de Aluno", {closeButton: true} + err);
            };
            listarTodosSemestres();
            AlunoAPIService.buscarAlunoPorCurso(id).then(sucesso, erro);
        } else {
            $scope.aluno = [];
            $scope.semestre = [];
            $scope.disciplina = [];
            $scope.alunosParaCadastro = [];
            $scope.alunoPorSemestre = [];
        }

    };


    listarTodosCursos();


});