import estabelecimentoEditComponent from './estabelecimento-edit.component';

const module = angular.module('front.app.estabelecimento.estabelecimento-edit', []);

module.component('estabelecimentoEdit', estabelecimentoEditComponent);

//configure component states
module.config(($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('estabelecimento-edit', {
      url: '/estabelecimento/editar/:id',
      title: "Estabelecimento",
      template: '<estabelecimento-edit></estabelecimento-edit>'
    });
});


export default module.name;
