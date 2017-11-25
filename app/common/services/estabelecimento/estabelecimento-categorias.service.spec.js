import angular from 'angular';
import angularMock from 'angular-mocks';

import { expect } from 'chai';


describe('Estabelecimento Service', () => {


  let estabelecimentoCategoriasService;

  beforeEach(angular.mock.module('front.services'));

  beforeEach(inject(($injector) => {
    let $httpBackend = $injector.get('$httpBackend');
    estabelecimentoCategoriasService = $injector.get("EstabelecimentoCategoriasService");
    
    let settings = $injector.get("SettingsService");

    let url = settings.getApiUrlWithEndpoint('estabelecimentoCategorias');
    

    $httpBackend.when('GET', url)
      .respond({
        code: 200,
        message: "Lorem ipsum",
        data: [
          {"id":"1","createdAt":1496447729,"nome":"nome 1"},
          {"id":"2","createdAt":1496447669,"nome":"nome 2"}        
        ]
      });
  }));

  it('Testar findAll', () => {

    estabelecimentoCategoriasService.findAll().then((categorias) => {
      expect(categorias).lengthOf(2);
      expect(categorias[0]).an.object();
      expect(categorias[0]).have("id");
      expect(categorias[0]).have("nome");
    });

  });

});
