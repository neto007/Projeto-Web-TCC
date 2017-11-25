import styles from './estabelecimento-list.module.scss';
import estabelecimentoListModalHtml from './estabelecimento-list-modal.html';
import estabelecimentoListModalController from './estabelecimento-list-modal.controller';

export default class {

  constructor(EstabelecimentoService, $mdDialog, toastr) {
    'ngInject';
    // css-modules (https://github.com/webpack/css-loader#css-modules)
    this.styles = styles;
    this.estabelecimentoService = EstabelecimentoService;
    this.mdDialog = $mdDialog;
    this.toastr = toastr;

    this.estabelecimentos = [];
  }

  removerEstabelecimento(estabelecimentoId) {

    let removerEstabelecimento = () => {
      this.estabelecimentoService.removeById(estabelecimentoId)
        .then(() => {
          this.toastr.success('Estabelecimento removido', 'O estabelecimento foi removido com sucesso.');
          this.atualizarLista();
        })
        .catch(() => this.toastr.error('Ops! Ocorreu um erro', 'Não foi possível remover o estabelecimento, tente novamente mais tarde!'));
    };

    this.mdDialog.show({
      controller: estabelecimentoListModalController,
      controllerAs: '$ctrl',
      template: estabelecimentoListModalHtml,
      parent: angular.element(document.body),
      clickOutsideToClose: true,
      focusOnOpen: false,
      locals: {
        onConfirmRemove: function() {
          removerEstabelecimento();
        }
      }
    });
  }

  atualizarLista() {
    this.estabelecimentoService.findAll()
      .then((estabelecimentos) => {
        this.estabelecimentos = estabelecimentos;
        console.log("estb.", estabelecimentos);
      })
      .catch((err) => this.toastr.error('Ops! Aconteceu um erro', 'Não foi possível carregar a listagem de estabelecimento, tente novamente mais tarde!'))
  }

  $onInit() {
    this.atualizarLista();
  }

  $onChanges() {
  }

  $onDestroy() {
  }
}
