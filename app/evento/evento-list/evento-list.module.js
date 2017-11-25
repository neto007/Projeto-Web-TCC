import eventoListComponent from './evento-list.component';

const module = angular.module('front.app.evento.evento-list', []);

module.component('eventoList', eventoListComponent);

//configure component states
module.config(($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('evento-list', {
      url: '/eventos/lista',
      title: "Eventos",
      template: '<evento-list></evento-list>'
    });
});

export default module.name;
