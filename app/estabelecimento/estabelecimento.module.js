import EstabelecimentoCreate from './estabelecimento-create/estabelecimento-create.module';
import EstabelecimentoList from './estabelecimento-list/estabelecimento-list.module';
import EstabelecimentoDetail from './estabelecimento-detail/estabelecimento-detail.module';
import EstabelecimentoEdit from './estabelecimento-edit/estabelecimento-edit.module';

const module = angular.module('front.app.estabelecimento', [
  EstabelecimentoCreate,
  EstabelecimentoList,
  EstabelecimentoDetail,
  EstabelecimentoEdit
]);

export default module.name;
