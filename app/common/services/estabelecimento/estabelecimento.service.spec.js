import angular from 'angular';
import angularMock from 'angular-mocks';

import { expect } from 'chai';
import Service from './estabelecimento.service';


describe('Estabelecimento Service', () => {


  let estabelecimentoService;

  beforeEach(angular.mock.module('front.services'));

  beforeEach(inject(($injector) => {
    let $httpBackend = $injector.get('$httpBackend');
    estabelecimentoService = $injector.get("EstabelecimentoService");
    
    let settings = $injector.get("SettingsService");

    let url = settings.getApiUrlWithEndpoint('estabelecimento');
    

    $httpBackend.when('GET', url)
      .respond({
        code: 200,
        message: "Lorem ipsum",
        data: [
          {"id":"1","createdAt":1496447729,"nome":"nome 1","imagemDeCapa":"https://unsplash.it/500?image=1","cnpj":"cnpj 1","descricao":"descricao 1","imagemDePerfil":"https://unsplash.it/300?image=","categoria":"categoria 1","enderecos":[]},
          {"id":"2","createdAt":1496447669,"nome":"nome 2","imagemDeCapa":"https://unsplash.it/500?image=2","cnpj":"cnpj 2","descricao":"descricao 2","imagemDePerfil":"https://unsplash.it/300?image=","categoria":"categoria 2","enderecos":[]}        
        ]
      });

    $httpBackend.when('GET', `${url}/5`)
      .respond({
        code: 200, 
        message: "Lorem ipsum",
        data: {"id":"2","createdAt":1496447669,"nome":"nome 2","imagemDeCapa":"https://unsplash.it/500?image=2","cnpj":"cnpj 2","descricao":"descricao 2","imagemDePerfil":"https://unsplash.it/300?image=","categoria":"categoria 2","enderecos":[]}
      });

    $httpBackend.when('PUT', `${url}/5`)
      .respond({
        code: 200,
        data: {"id":"2","createdAt":1496447669,"nome":"nome 2","imagemDeCapa":"https://unsplash.it/500?image=2","cnpj":"cnpj 2","descricao":"descricao 2","imagemDePerfil":"https://unsplash.it/300?image=","categoria":"categoria 2","enderecos":[]}
      });

    $httpBackend.when('POST', `${url}`)
      .respond({
        code: 200,
        data: {"id":"2","createdAt":1496447669,"nome":"nome 2","imagemDeCapa":"https://unsplash.it/500?image=2","cnpj":"cnpj 2","descricao":"descricao 2","imagemDePerfil":"https://unsplash.it/300?image=","categoria":"categoria 2","enderecos":[]}
      })
  }));

  it('Testar findAll', () => {

    estabelecimentoService.findAll().then((estabelecimentos) => {
      expect(estabelecimentos).lengthOf(2);
      expect(estabelecimentos[0]).an.object();
      expect(estabelecimentos[0]).have("id");
      expect(estabelecimentos[0]).have("nome");
    });

  });

  it('Testar findById', () => {

    estabelecimentoService.findById(5).then((estabelecimento) => {
      expect(estabelecimento).an.object();
      expect(estabelecimento).have("id");
      expect(estabelecimento).have("nome");
    })

  });

  it('Testar updateById', () => {
    
    estabelecimentoService.updateById(5, {}).then((estabelecimento) => {
      expect(estabelecimento).an.object();
      expect(estabelecimento).have("id");
      expect(estabelecimento).have("nome");
    });

  });

  it('Testar create', () => {

    estabelecimentoService.create({}).then((estabelecimento) => {
      expect(estabelecimento).an.object();
      expect(estabelecimento).have("id");
      expect(estabelecimento).have("nome");
    });

  });
});
