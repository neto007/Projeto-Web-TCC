import VoucherCreate from './voucher-create/voucher-create.module';
import VoucherList from './voucher-list/voucher-list.module';
import VoucherEdit from './voucher-edit/voucher-edit.module';

const module = angular.module('front.app.voucher', [
  VoucherCreate,
  VoucherList,
  VoucherEdit
]);

export default module.name;
