export default class {

    constructor($http, SettingsService) {
        'ngInject';

        this.$http = $http;
        this.settings = SettingsService;

        this.url = this.settings.getApiUrlWithEndpoint('galeria');
    }

    findAll() {
        return this.$http.get(this.url)
            .then((galerias) => galerias.data);
    }

    findById(id) {
        return this.$http.get(`${this.url}/${id}`)
            .then((galeria) => galeria.data);
    }

    removeById(id) {
        return this.$http.delete(`${this.url}/${id}`);
    }

    updateById(id, galeria) {

        if (galeria.id) {
            delete galeria.id;
        }

        return this.$http.put(`${this.url}/${id}`, galeria)
            .then((galeria) => galeria.data);
    }

    create(galeria) {
        return this.$http.post(`${this.url}`, galeria)
            .then((galeria) => galeria.data);
    }

}