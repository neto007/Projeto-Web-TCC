import styles from './voucher-list.module.scss';
import voucherListModalHtml from './voucher-list-modal.html';
import voucherListModalController from './voucher-list-modal.controller';

export default class {

  constructor(VoucherService, $mdDialog, toastr) {
    'ngInject';

    // css-modules (https://github.com/webpack/css-loader#css-modules)
    this.styles = styles;
    this.voucherService = VoucherService;
    this.mdDialog = $mdDialog;
    this.toastr = toastr;

    this.vouchers = [];
  }

  removerVoucher(voucherId) {

    let removerVoucher = () => {
      this.voucherService.removeById(voucherId)
        .then(() => {
          this.toastr.success('Voucher removido', 'O voucher foi removido com sucesso.');
          this.atualizarLista();
        })
        .catch(() => this.toastr.error('Ops! Ocorreu um erro', 'Não foi possível remover o voucher, tente novamente mais tarde!'));
    };

    this.mdDialog.show({
      controller: voucherListModalController,
      controllerAs: '$ctrl',
      template: voucherListModalHtml,
      parent: angular.element(document.body),
      clickOutsideToClose: true,
      focusOnOpen: false,
      locals: {
        onConfirmRemove: function() {
          removerVoucher();
        }
      }
    });
  }

  atualizarLista() {
    this.voucherService.findAll()
      .then((vouchers) => {
        this.vouchers = vouchers;
      })
      .catch((err) => this.toastr.error('Ops! Aconteceu um erro', 'Não foi possível carregar a listagem de vouchers, tente novamente mais tarde!'))
  }
  
  $onInit() {
    this.atualizarLista();
  }

  $onChanges() {
  }

  $onDestroy() {
  }
}
