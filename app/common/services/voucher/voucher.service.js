export default class {

  constructor($http, SettingsService) { //inetar
    'ngInject';

    this.$http = $http;
    this.settings = SettingsService;
    
    this.url = this.settings.getApiUrlWithEndpoint('voucher');
  }

  findAll() {
    return this.$http.get(this.url)
      .then((vouchers) => vouchers.data);
  }

  findById(id) {
    return this.$http.get(`${this.url}/${id}`)
      .then((voucher) => voucher.data)
      .then((voucher) => {
        voucher.idEstabelecimento = voucher.estabelecimento.id;
        voucher.idEvento = voucher.evento.id;
        return voucher;
      })
  }

  removeById(id) {
    return this.$http.delete(`${this.url}/${id}`);
  }

  updateById(id, voucher) {

    delete voucher.id;    
    delete voucher.estabelecimento;
    delete voucher.evento;

    return this.$http.post(`${this.url}/${id}`, voucher)
      .then((voucher) => voucher.data);
  }

  create(voucher) {
    return this.$http.post(`${this.url}`, voucher)
      .then((voucher) => voucher.data);
  }

}