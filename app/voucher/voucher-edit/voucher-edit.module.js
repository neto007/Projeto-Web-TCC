import voucherEditComponent from './voucher-edit.component';

const module = angular.module('front.app.voucher.voucher-edit', []);

module.component('voucherEdit', voucherEditComponent);

//configure component states
module.config(($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('voucher-edit', {
      url: '/voucher/editar/:id',
      title: "Voucher",
      template: '<voucher-edit></voucher-edit>'
    });
});


export default module.name;
