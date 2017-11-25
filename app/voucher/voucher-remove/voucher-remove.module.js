import voucherRemoveComponent from './voucher-remove.component';

const module = angular.module('front.app.voucher.voucher-remove', []);

module.component('voucherRemove', voucherRemoveComponent);

//configure component states
module.config(($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('voucher-remove', {
      url: '/voucher-remove',
      template: '<voucher-remove></voucher-remove>'
    });
});

export default module.name;
