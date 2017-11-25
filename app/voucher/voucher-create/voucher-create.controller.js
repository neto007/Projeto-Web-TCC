import styles from './voucher-create.module.scss';

export default class {

  constructor(VoucherService,EstabelecimentoService,toastr,$state,EventoService) {
    'ngInject';

    this.styles = styles;
    this.voucherService = VoucherService;
    this.estabelecimentoService = EstabelecimentoService;
    this.eventoService = EventoService;
    this.toastr = toastr;
    this.$state = $state;

    this.carregandoEstabelecimentos = true;
    this.estabelecimentos = [];
    this.eventos = [];
    this.todosEventos = [];

  }

  salvar(isValid) {
  if(!isValid) {
    this.toastr.error('Existem erros no seu formulário, verifique e tente novamente', 'Ops! Ocorreu um erro');
    return;
  }

  let voucher = angular.copy(this.voucher);
  this.voucherService.create(voucher)
    .then(() => {
      this.toastr.success('Voucher criado com sucesso', 'Sucesso!');
      this.$state.go('voucher-list');
    });
  }

  selecionarEstabelecimento() {
    this.eventos = this.todosEventos.filter((evento) => {
      return evento.estabelecimento.id == this.voucher.idEstabelecimento;
    });
  }

  $onInit() {

    this.estabelecimentoService.findAll()
      .then((estabelecimentos) => {
        this.estabelecimentos = estabelecimentos;
        this.carregandoEstabelecimentos = false;
      });

    this.eventoService.findAll()
      .then((eventos) => {
        this.eventos = eventos;
        this.todosEventos = eventos;
      });

  }

  $onChanges() {
  }

  $onDestroy() {
  }
}
