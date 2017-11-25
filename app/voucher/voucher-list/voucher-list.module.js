import voucherListComponent from './voucher-list.component';

const module = angular.module('front.app.voucher.voucher-list', []);

module.component('voucherList', voucherListComponent);

//configure component states
module.config(($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('voucher-list', {
      url: '/voucher/lista',
      title: "Vouchers",
      template: '<voucher-list  vouchers="$resolve.voucherList"></voucher-list>',
      resolve: {
        voucherList: function(VoucherService) {
          return VoucherService.findAll();
        }
      }
    });
});

export default module.name;
