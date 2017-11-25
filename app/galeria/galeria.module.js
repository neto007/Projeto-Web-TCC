import GaleriaCreate from './galeria-create/galeria-create.module';
import GaleriaList from './galeria-list/galeria-list.module';

const module = angular.module('front.app.galeria', [
    GaleriaCreate,
    GaleriaList
]);

export default module.name;