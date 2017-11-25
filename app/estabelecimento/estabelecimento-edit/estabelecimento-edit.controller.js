import styles from './estabelecimento-edit.module.scss';

export default class {

  constructor($stateParams, EstabelecimentoService, EstabelecimentoCategoriasService, blockUI, ViacepService, $mdDialog, toastr, $state) {
    'ngInject';
    // css-modules (https://github.com/webpack/css-loader#css-modules)
    this.styles = styles;
    this.params = $stateParams;
    this.toastr = toastr;
    this.estabelecimentoService = EstabelecimentoService;
    this.estabelecimentoCategorias = EstabelecimentoCategoriasService;
    this.$state = $state;
    this.blockUI = blockUI;
    this.$mdDialog = $mdDialog;
    this.viacep = ViacepService;

    this.carregandoCategorias = true;
    this.categorias = [];
  }

  salvar(isValid) {
    if(!isValid) {
      this.toastr.error('Existem erros no seu formulário, verifique e tente novamente', 'Ops! Ocorreu um erro');
    }

    let estabelecimento = angular.copy(this.estabelecimento);
    this.estabelecimentoService.updateById(this.params.id, estabelecimento)
      .then(() => {
        this.toastr.success('Estabelecimento salvo com sucesso!');
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
    .catch((err) => console.error(err));
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
    if(!this.params.id) {
      this.toastr.error('Ocorreu um erro para editar o estabelecimento selecionado');
      this.$state.go('estabelecimento-list');
    }

    this.estabelecimentoCategorias.findAll()
      .then((categorias) => {
        this.categorias = categorias;
        this.carregandoCategorias = false;
      });
    
    this.estabelecimentoService.findById(this.params.id)
      .then((estabelecimento) => {
        estabelecimento.imagem = {
          base64: estabelecimento.imagem.replace('data:image/png;base64,', '')
        }
        this.estabelecimento = estabelecimento;
      })
      .catch((err) => {
        console.log(err);
        this.toastr.error('Ocorreu um erro para editar estabelecimento selecionado');
        this.$state.go('estabelecimento-list');
      });
  }

  $onChanges() {
  }

  $onDestroy() {
  }
}
