export default class {

  constructor($http, SettingsService) { //inetar
    'ngInject';

    this.$http = $http;
    this.settings = SettingsService;
    
    this.url = this.settings.getApiUrlWithEndpoint('evento');
  }

  findAll() {
    return this.$http.get(this.url)
      .then((eventos) => eventos.data);
  }

  findById(id) {
    return this.$http.get(`${this.url}/${id}`)
      .then((evento) => evento.data)
      .then((evento) => {
        evento = Object.assign(evento, evento.endereco);
        evento.idCategoria = evento.categoria.id;
        evento.idEstabelecimento = evento.estabelecimento.id;
        return evento;
      });
  }

  removeById(id) {
    return this.$http.delete(`${this.url}/${id}`);
  }

  updateById(id, evento) {

    if(evento.id) {
      delete evento.id;    
    }

    return this.$http.post(`${this.url}/${id}`, evento)
      .then((evento) => evento.data);
  }

  create(evento) {
    return this.$http.post(`${this.url}`, evento)
      .then((evento) => evento.data);
  }

}