import galeriaCreateComponent from './galeria-create.component';

const module = angular.module('front.app.galeria.galeria-create', []);

module.component('galeriaCreate', galeriaCreateComponent);

//configure component states
module.config(($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('galeria-create', {
      url: '/galeria-create',
      template: '<galeria-create></galeria-create>'
    });
});

export default module.name;
