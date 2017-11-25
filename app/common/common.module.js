import Shell from './shell/shell.module';

import VoucherService from './services/voucher/voucher.service';

import Services from './services/services.module';

const module = angular.module('front.common', [
  Shell,
  Services
]);

module.service('VoucherService', VoucherService);

export default module.name;
