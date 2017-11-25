import eventoDetailComponent from './evento-detail.component';

const module = angular.module('front.app.evento.evento-detail', []);

module.component('eventoDetail', eventoDetailComponent);

//configure component states
module.config(($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('evento-detail', {
      url: '/eventos/detalhe',
      title: "Evento",
      template: '<evento-detail></evento-detail>'
    });
});

export default module.name;
