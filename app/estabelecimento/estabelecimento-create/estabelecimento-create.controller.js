import styles from './estabelecimento-create.module.scss';

export default class {
  constructor(EstabelecimentoCategoriasService, EstabelecimentoService, toastr, $mdDialog, $state, blockUI, ViacepService) {
    'ngInject';
    // css-modules (https://github.com/webpack/css-loader#css-modules)
    this.styles = styles;
    this.estabelecimentoCategorias = EstabelecimentoCategoriasService;
    this.estabelecimentoService = EstabelecimentoService;
    this.toastr = toastr;
    this.$state = $state;
    this.viacep = ViacepService;
    this.blockUI = blockUI;
    this.$mdDialog = $mdDialog;

    this.carregandoCategorias = true;
    this.categorias = [];
  }

  salvar(isValid) {
    if(!isValid) {
      this.toastr.error('Existem erros no seu formulário, verifique e tente novamente', 'Ops! Ocorreu um erro');
      return;
    }

    let estabelecimento = angular.copy(this.estabelecimento);
    this.estabelecimentoService.create(estabelecimento)
      .then(() => {
        this.toastr.success('Estabelecimento criado com sucesso', 'Sucesso!');
        this.$state.go('estabelecimento-list');
      });
  }

  onCepChanged() {
    if(!this.estabelecimento.cep || this.estabelecimento.cep.replace('-', '').length < 8) {
      return;
    }

    this.blockUI.start({
      message: "Aguarde... Buscando CEP!"
    });

    this.viacep.getEnderecoByCep(this.estabelecimento.cep.replace('-', ''))
      .then((data) => {
        this.blockUI.stop();
        
        if(data.erro) {
          let alert = this.$mdDialog.alert({
            title: 'Ops!',
            textContent: 'CEP Inválido!',
            ok: 'Fechar'
          });
      
          this.$mdDialog
            .show( alert )
            .finally(function() {
              alert = undefined;
            });    
          return;      
        }

        this.estabelecimento.cidade = data.localidade;
        this.estabelecimento.bairro = data.bairro;
        this.estabelecimento.estado = data.uf;
        this.estabelecimento.rua = data.logradouro;
      })
  }

  manualBlocked(event) {
    let alert = this.$mdDialog.alert({
      title: 'Ops!',
      textContent: 'Você não pode alterar esse campo, ele é preenchido automaticamente a partir do seu CEP!',
      ok: 'Fechar'
    });

    this.$mdDialog
      .show( alert )
      .finally(function() {
        alert = undefined;
      });
  }

  $onInit() {
    this.estabelecimentoCategorias.findAll()
      .then((categorias) => {
        this.categorias = categorias;
        this.carregandoCategorias = false;
      });
  }

  $onChanges() {
  }

  $onDestroy() {
  }
}
