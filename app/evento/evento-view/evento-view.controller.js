import styles from './evento-view.module.scss';

export default class {

  constructor($stateParams, EventoService, toastr, $state, EstabelecimentoService) {
    'ngInject';
    // css-modules (https://github.com/webpack/css-loader#css-modules)
    this.styles = styles;
    this.params = $stateParams;
    this.toastr = toastr;
    this.eventoService = EventoService;
    this.estabelecimentoService = EstabelecimentoService;
    this.$state = $state;
  
    
    
  }

  $onInit() {
    
  if (!this.params.id) {
      this.toastr.error('Ocorreu um erro para visualizar o evento selecionado !');
      this.$state.go('evento-list');
    }

    this.eventoService.findById(this.params.id)
      .then((evento) => {
        this.evento = evento;
      })
      .catch((err) => {
        this.toastr.error('Ocorreu um erro para visualizar o evento selecionado');
        this.$state.go('evento-list');
      });
    
  }

  $onChanges() {
  }

  $onDestroy() {
  }
}
