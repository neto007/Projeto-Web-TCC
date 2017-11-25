import EventoCreate from './evento-create/evento-create.module';
import EventoList from './evento-list/evento-list.module';
import EventoViewEdit from './evento-view-edit/evento-view-edit.module';
import EventoDetail from './evento-detail/evento-detail.module';
import EventoView from './evento-view/evento-view.module';

const module = angular.module('front.app.evento', [
  EventoCreate,
  EventoList,
  EventoViewEdit,
  EventoDetail,
  EventoView
]);

export default module.name;
