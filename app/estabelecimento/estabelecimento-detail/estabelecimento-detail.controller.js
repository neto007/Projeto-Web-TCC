import styles from './estabelecimento-detail.module.scss';

export default class {

    constructor($stateParams, EstabelecimentoService, EstabelecimentoCategoriasService, toastr, $state) {
        'ngInject';
        // css-modules (https://github.com/webpack/css-loader#css-modules)
        this.styles = styles;
        this.params = $stateParams;
        this.toastr = toastr;
        this.estabelecimentoService = EstabelecimentoService;
        this.estabelecimentoCategorias = EstabelecimentoCategoriasService;
        this.$state = $state;

        this.carregandoCategorias = true;
        this.categorias = [];
    }

    salvar(isValid) {
        console.log("Passou");
        if (!isValid) {
            this.toastr.error('Existem erros no seu formulário, verifique e tente novamente', 'Ops! Ocorreu um erro');
        }

        let estabelecimento = angular.copy(this.estabelecimento);
        this.estabelecimentoService.updateById(this.params.id, estabelecimento)
            .then(() => {
                this.toastr.success('Estabelecimento salvo com sucesso!');
                this.$state.go('estabelecimento-list');
            });
    }

    $onInit() {
        if (!this.params.id) {
            this.toastr.error('Ocorreu um erro para visualizar o evento selecionado !');
            this.$state.go('estabelecimento-list');
        }
        this.estabelecimentoService.findById(this.params.id)
            .then((estabelecimento) => {
                this.estabelecimento = estabelecimento;
            })
            .catch((err) => {
                console.log(err);
                this.toastr.error('Ocorreu um erro para editar estabelecimento selecionado');
                this.$state.go('estabelecimento-list');
            });
        this.estabelecimentoCategorias.findAll()
            .then((categorias) => {
                this.categorias = categorias;
                this.carregandoCategorias = false;
            });
    }
    $onChanges() {}

    $onDestroy() {}
}