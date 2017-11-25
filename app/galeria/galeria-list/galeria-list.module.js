import galeriaListComponent from './galeria-list.component';

const module = angular.module('front.app.galeria.galeria-list', []);

module.component('galeriaList', galeriaListComponent);

//configure component states
module.config(($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('galeria-list', {
      url: '/galeria-list',
      template: '<galeria-list></galeria-list>'
    });
});

export default module.name;
