import styles from './evento-create.module.scss';

export default class {

  constructor(EventoService, toastr, $state, EstabelecimentoService, EventoCategoriaService) {
    'ngInject';
    this.styles = styles;
    this.eventoService = EventoService;
    this.toastr = toastr;
    this.$state = $state;
    this.estabelecimentoService = EstabelecimentoService;
    this.eventoCategoriaService = EventoCategoriaService;
    this.estabelecimentos = [];
    this.eventoCategorias = [];
    this.isLoadingEstabelecimentos = true;
    this.isLoadingCategoriaEventos = true;
  }

    salvar(isValid) {
    if(!isValid) {
      this.toastr.error('Existem erros no seu formulário, verifique e tente novamente', 'Ops! Ocorreu um erro');
      return;
    }

    let evento = angular.copy(this.evento);
    this.eventoService.create(evento)
      .then(() => {
        this.toastr.success('Evento criado com sucesso', 'Sucesso!');
        this.$state.go('evento-list');
      });
  }

  $onInit() {
    this.estabelecimentoService.findAll()
      .then((estabelecimentos) => {
        this.estabelecimentos = estabelecimentos; 
        this.isLoadingEstabelecimentos = false;
      });

    this.eventoCategoriaService.findAll()
      .then((eventoCategorias) => {
        this.eventoCategorias = eventoCategorias;
        this.isLoadingCategoriaEventos = false;
      });
  }

  $onChanges() {
  }

  $onDestroy() {
  }
}
