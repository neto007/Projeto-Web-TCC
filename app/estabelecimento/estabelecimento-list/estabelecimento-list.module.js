import estabelecimentoListComponent from './estabelecimento-list.component';

const module = angular.module('front.app.estabelecimento.estabelecimento-list', []);

module.component('estabelecimentoList', estabelecimentoListComponent);

//configure component states
module.config(($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('estabelecimento-list', {
      url: '/estabelecimento/lista',
      title: "Estabelecimentos",
      template: '<estabelecimento-list></estabelecimento-list>'
    });
});

export default module.name;
