import voucherCreateComponent from './voucher-create.component';

const module = angular.module('front.app.voucher.voucher-create', []);

module.component('voucherCreate', voucherCreateComponent);

//configure component states
module.config(($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('voucher-create', {
      url: '/voucher/criar',
      title: "Novo Voucher",
      template: '<voucher-create></voucher-create>'
    });


});

export default module.name;
