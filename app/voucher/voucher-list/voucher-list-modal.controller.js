import styles from './voucher-list.module.scss';

export default class {

  constructor($mdDialog, onConfirmRemove) {
    'ngInject';

    // css-modules (https://github.com/webpack/css-loader#css-modules)
    this.styles = styles;
    this.mdDialog = $mdDialog;
    this.onRemove = onConfirmRemove;
  }

  hide() {
    this.mdDialog.hide();
  };

  excluir() {
    console.log(this.onRemove);
    this.mdDialog.hide();
    this.onRemove();
  };

}
