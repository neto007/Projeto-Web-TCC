import eventoViewEditComponent from './evento-view-edit.component';

const module = angular.module('front.app.evento.evento-view-edit', []);

module.component('eventoViewEdit', eventoViewEditComponent);

//configure component states
module.config(($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('evento-view-edit', {
      url: '/evento/editar/:id',
      title: "Evento",
      template: '<evento-view-edit></evento-view>'
    });
});

export default module.name;
