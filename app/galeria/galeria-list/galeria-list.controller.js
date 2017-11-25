import styles from './galeria-list.module.scss';
import GaleriaListRemoverFotoHtml from './galeria-list-remover-foto.html';
import GaleriaListRemoverFotoController from './galeria-list-remover-foto.controller';
import GaleriaListVisualizarFotoHtml from './galeria-list-visualizar-foto.html';
import GaleriaListVisualizarFotoController from './galeria-list-visualizar-foto.controller';

export default class {


    constructor(GaleriaService, $mdDialog, $state, toastr) {
        'ngInject';

        // css-modules (https://github.com/webpack/css-loader#css-modules)
        this.styles = styles;
        this.mdDialog = $mdDialog;
        this.galeriaService = GaleriaService;
        this.$state = $state;
        this.toastr = toastr;

        this.galerias = [];


    }

    removerFoto(galeriaid) {

        let removerFoto = () => {
            console.log(galeriaid);
            this.galeriaService.removeById(galeriaid)
                .then(() => {
                    this.toastr.success('Imagem removido', 'O Imagem foi removido com sucesso.');
                    this.atualizarLista();
                })
                .catch(() => this.toastr.error('Ops! Ocorreu um erro', 'Não foi possível remover o Imagem, tente novamente mais tarde!'));
        };

        this.mdDialog.show({
            controller: GaleriaListRemoverFotoController,
            controllerAs: '$ctrl',
            template: GaleriaListRemoverFotoHtml,
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            focusOnOpen: false,
            locals: {
                onConfirmRemove: function() {
                    removerFoto();
                }
            }
        });
    }

    visualizarFoto() {

        this.mdDialog.show({
            controller: GaleriaListVisualizarFotoController,
            controllerAs: '$ctrl',
            template: GaleriaListVisualizarFotoHtml,
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            focusOnOpen: false,
            locals: {
                onConfirmRemove: function() {
                    removerFoto();
                }
            }
        });
    }

    atualizarLista() {
        this.galeriaService.findAll()
            .then((galerias) => {
                this.galerias = galerias;
                console.log("gale.", galerias);
            })

    }

    adicionarFoto(ev) {

        var confirm = this.mdDialog.prompt()
            .title('Adicionar nova foto')
            .textContent('Digite o diretório onde a foto está salva')
            .placeholder('Diretório')
            .targetEvent(ev)
            .ok('Enviar')
            .cancel('Cancelar');

        this.mdDialog.show(confirm).then(function(result) {
            this.status = 'Foto enviada com sucesso!';
        }, function() {

        });
    }

    $onInit() {
        this.atualizarLista();
    }

    $onChanges() {}

    $onDestroy() {}
}