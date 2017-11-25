import UsuarioService from './usuario/usuario.service';
import SettingsService from './settings/settings.service';
import EstabelecimentoService from './estabelecimento/estabelecimento.service';
import EstabelecimentoCategoriasService from './estabelecimento/estabelecimento-categorias.service';
import VoucherService from './voucher/voucher.service';
import EventoService from './evento/evento.service';
import GaleriaService from './galeria/galeria.service';
import LoginService from './login/login.service';
import EventoCategoriaService from './evento/evento-categorias.service';
import RequestService from './request/request.service';
import ViacepService from './viacep/viacep.service';

const module = angular.module('front.services', []);

module.service('SettingsService', SettingsService);
module.service('UsuarioService', UsuarioService);
module.service('EstabelecimentoService', EstabelecimentoService);
module.service('EstabelecimentoCategoriasService', EstabelecimentoCategoriasService);
module.service('EventoService', EventoService);
module.service('EventoCategoriaService', EventoCategoriaService);
module.service('VoucherService', VoucherService);
module.service('GaleriaService', GaleriaService);
module.service('LoginService', LoginService);
module.service('RequestService', RequestService);
module.service('ViacepService', ViacepService);


export default module.name;