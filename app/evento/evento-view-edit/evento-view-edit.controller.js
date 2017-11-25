import styles from './evento-view-edit.module.scss';

export default class {

  constructor($stateParams, EventoService, toastr, $state, EstabelecimentoService, EventoCategoriaService) {
    'ngInject';
    // css-modules (https://github.com/webpack/css-loader#css-modules)
    this.styles = styles;
    this.params = $stateParams;
    this.toastr = toastr;
    this.eventoService = EventoService;
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
    }

    let evento = angular.copy(this.evento);
    this.eventoService.updateById(this.params.id, evento)
      .then(() => {
        this.toastr.success('Evento salvo com sucesso!');
        this.$state.go('evento-list');
      });
  }

  $onInit() {
    if (!this.params.id) {
      this.toastr.error('Ocorreu um erro para editar evento selecionado');
      this.$state.go('evento-list');
    }

    this.eventoService.findById(this.params.id)
      .then((evento) => {
        evento.imagem = {
          base64: evento.imagem.replace('data:image/png;base64,', '')
        }
        
        this.evento = evento;
      })
      .catch((err) => {
        this.toastr.error('Ocorreu um erro para editar evento selecionado');
        this.$state.go('evento-list');
      });

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
