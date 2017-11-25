export default class EventoCategoriaService {
  constructor($http, SettingsService) {
    'ngInject';
    
    this.$http = $http;

    this.url = SettingsService.getApiUrlWithEndpoint("eventoCategoria");
  }

  findAll() {
    return this.$http.get(this.url)
      .then((response) => response.data);
  }
}