import eventoViewComponent from './evento-view.component';

const module = angular.module('front.app.evento.evento-view', []);

module.component('eventoView', eventoViewComponent);

//configure component states
module.config(($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('evento-view', {
      url: '/eventos/visualizar/:id',
      title: "Evento",
      template: '<evento-view></evento-view>'
    });
});

export default module.name;
