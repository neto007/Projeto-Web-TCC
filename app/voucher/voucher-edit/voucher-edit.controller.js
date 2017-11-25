import styles from './voucher-edit.module.scss';

export default class {

  constructor($stateParams, EstabelecimentoService, VoucherService, toastr, $state, EventoService) {
    'ngInject';
   
    this.styles = styles;
    this.params = $stateParams;
    this.toastr = toastr;
    this.estabelecimentoService = EstabelecimentoService;
    this.voucherService = VoucherService;
    this.$state = $state;

    this.carregandoEstabelecimentos = true;
    this.estabelecimentos = [];
    this.eventoService = EventoService;

  }

  selecionarEstabelecimento() {
    this.eventos = this.todosEventos.filter((evento) => {
      return evento.estabelecimento.id == this.voucher.idEstabelecimento;
    });
  }

  salvar(isValid) {
    if(!isValid) {
      this.toastr.error('Existem erros no seu formulário, verifique e tente novamente', 'Ops! Ocorreu um erro');
    }

    let voucher = angular.copy(this.voucher); 
    this.voucherService.updateById(this.params.id, voucher)
      .then(() => {
        this.toastr.success('Voucher salvo com sucesso!');
        this.$state.go('voucher-list');
      });
  }

  $onInit() {    
    if(!this.params.id) {
      this.toastr.error('Ocorreu um erro para editar o voucher selecionado');
      this.$state.go('voucher-list');
    }

    this.estabelecimentoService.findAll()
      .then((estabelecimentos) => {
        this.estabelecimentos = estabelecimentos;
        this.carregandoEstabelecimentos = false;
      });

    this.eventoService.findAll()
      .then((evento) => {
        this.eventos = evento;
      })
    
    this.voucherService.findById(this.params.id)
      .then((voucher) => {
        voucher.imagem = {
          base64: voucher.imagem.replace('data:image/png;base64,', '')
        }
        this.voucher = voucher; 

        this.check1 = (voucher.dataInicio != null);
        this.check2 = (voucher.quantidade != null);

      })
      .catch((err) => {
        this.toastr.error('Ocorreu um erro para editar o voucher selecionado');
        this.$state.go('voucher-list');
      });
  }

  $onChanges() {
  }

  $onDestroy() {
  }
}
