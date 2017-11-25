import estabelecimentoDetailComponent from './estabelecimento-detail.component';

const module = angular.module('front.app.estabelecimento.estabelecimento-detail', []);

module.component('estabelecimentoDetail', estabelecimentoDetailComponent);

//configure component states
module.config(($stateProvider) => {
    'ngInject';

    $stateProvider
        .state('estabelecimento-detail', {
            url: '/estabelecimento/detalhe/:id',
            title: "Estabelecimento",
            template: '<estabelecimento-detail></estabelecimento-detail>'
        });
});

export default module.name;