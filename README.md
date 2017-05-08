# Sistema-Academico-SinglePageApp

- Sistema Acadêmico SinglePageApp - Desenvolvido com o Framework [AngularJS](https://angularjs.org/).

- Customização das Views atraves do [Bootstrap](http://getbootstrap.com.br/).

## Descrição:

* Implementar uma aplicação front-end de um sistema acadêmico com AngularJS.

## Objetivos: 

- Criar uma estrutura com menus. 
- Criar uma view de listagem de Curso. 
- Criar uma view de listagem de Disciplinas (Todas ou Listagem por curso). 
- Criar uma view de listagem de Aluno (Todas ou Listagem por curso). 
- Criar uma view de cadastro de Disciplinas. 
- Criar uma view de cadastro de Cursos. 
- Criar uma view de cadastro de Alunos.
> As views devem seguir como os protótipos das imagens.
```sh
Home, Cadastro, Curso, Cadastro de Curso, Disciplina, Cadastro de Disciplina, Aluno, Cadastro de Aluno
```
![img1](https://cloud.githubusercontent.com/assets/25457535/25214674/86a6401e-2566-11e7-97a7-3dad884c337f.png)

`OBSERVAÇÕES`

### WebService

>O front-end deve consumir um Webservice RESTful (neste projeto foi realizada uma implementado) do backend:

### WS - Listagem Paginada (GET - RETORNA ARRAY)

>Listagem de cursos: http://siscadcpwiv.herokuapp.com/curso/list/2/3 

>Listagem de disciplinas: http://siscadcpwiv.herokuapp.com/disciplina/list/2/3 

>Listagem de alunos: http://siscadcpwiv.herokuapp.com/aluno/list/2/3

### WS - Listagem por ID Curso (GET - RETORNA JSON)

>Listagem de disciplinas por id de curso: http://siscadcpwiv.herokuapp.com/disciplina/curso/1

>Listagem de alunos por id de curso: http://siscadcpwiv.herokuapp.com/aluno/curso/1

### WS - Buscar por ID (GET - RETORNA JSON)

>Busca de curso por id: http://siscadcpwiv.herokuapp.com/curso/id/1 

>Busca de disciplina por id: http://siscadcpwiv.herokuapp.com/disciplina/id/1 

>Busca de aluno por id: http://siscadcpwiv.herokuapp.com/aluno/id/1

### WS - Cadastro (POST)

>Cadastro de curso: http://siscadcpwiv.herokuapp.com/curso/ 

### Exemplo de objeto aceito no Cadastramento de Curso:

![img9](https://cloud.githubusercontent.com/assets/25457535/25213806/45c62500-2561-11e7-96ab-900fd5a8ca5d.png)

>Cadastro de disciplina: http://siscadcpwiv.herokuapp.com/disciplina/ 

### Exemplo de objeto aceito no Cadastramento da Disciplina:

![img10](https://cloud.githubusercontent.com/assets/25457535/25213901/08ec836c-2562-11e7-9c44-b1b3e5cbc722.png)

>Cadastro de aluno: http://siscadcpwiv.herokuapp.com/aluno/ 

### Exemplo de objeto aceito no Cadastramento de Aluno:

![img11](https://cloud.githubusercontent.com/assets/25457535/25214009/bc93f44a-2562-11e7-875a-365eeb0a608b.png)










