import eventoCreateComponent from './evento-create.component';

const module = angular.module('front.app.evento.evento-create', []);

module.component('eventoCreate', eventoCreateComponent);

//configure component states
module.config(($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('evento-create', {
      url: '/eventos/novo',
      title: "Novo evento",
      template: '<evento-create></evento-create>'
    });
});

export default module.name;
