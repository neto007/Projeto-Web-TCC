import styles from './galeria-list.module.scss';

export default class {

    constructor($mdDialog) {
        'ngInject';

        this.styles = styles;
        this.mdDialog = $mdDialog;
    }

    hide() {
        this.mdDialog.hide();
    };

}