import styles from './evento-list.module.scss';
import eventoListModalHtml from './evento-list-modal.html';
import eventoListModalController from './evento-list-modal.controller';

export default class {

  constructor(EventoService, $mdDialog, toastr) {
    'ngInject';
    this.styles = styles;
    this.eventoService = EventoService;
    this.mdDialog = $mdDialog
    this.toastr = toastr;

    this.eventos = [];
  }
  removerEvento(eventoId) {

    let removerEvento = () => {
      this.eventoService.removeById(eventoId)
        .then(() => {
          this.toastr.success('Evento removido', 'O evento foi removido com sucesso.');
          this.atualizarLista();
        })
        .catch(() => this.toastr.error('Ops! Ocorreu um erro', 'Não foi possível remover o evento, tente novamente mais tarde!'));
    };

    this.mdDialog.show({
      controller: eventoListModalController,
      controllerAs: '$ctrl',
      template: eventoListModalHtml,
      parent: angular.element(document.body),
      clickOutsideToClose: true,
      focusOnOpen: false,
      locals: {
        onConfirmRemove: function() {
          removerEvento();
        }
      }
    });
  }

  atualizarLista() {
    this.eventoService.findAll()
      .then((eventos) => {
        this.eventos = eventos;
        console.log("event.", eventos);
      })
      .catch((err) => this.toastr.error('Ops! Aconteceu um erro', 'Não foi possível carregar a listagem de evento, tente novamente mais tarde!'))
  }

  $onInit() {
    this.atualizarLista();
  }

  $onChanges() {
  }

  $onDestroy() {
  }
}

