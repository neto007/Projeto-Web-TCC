import angular from 'angular';
import angularMock from 'angular-mocks';

import { expect } from 'chai';
import Service from './voucher.service';

describe('Voucher Service', () => {


  let voucherService;  



  beforeEach(angular.mock.module('front.services'));

   beforeEach(inject(($injector) => {
    let $httpBackend = $injector.get('$httpBackend');
    voucherService = $injector.get("VoucherService");

    let settings = $injector.get("SettingsService");

    let url = settings.getApiUrlWithEndpoint('voucher');

    $httpBackend.when('GET', url)
      .respond({
        code: 200,
        message: "Lorem ipsum",
        data: [
          {"id":"1","createdAt":1496447729,"name":"voucher 1","dataInicio":"12:00","dataFim":"01:00","titulo":"descricao 1","estabelecimento":[],"evento":[],"quantidade":"80"},
          {"id":"1","createdAt":1496447730,"name":"voucher 2","dataInicio":"12:00","dataFim":"01:00","titulo":"descricao 2","estabelecimento":[],"evento":[],"quantidade":"50"},      
        ]
      });


    $httpBackend.when('GET', `${url}/5`)
      .respond({
        code: 200, 
        message: "Lorem ipsum",
        data: {"id":"6","createdAt":1496447729,"name":"voucher 2","dataInicio":"12:00","dataFim":"01:00","titulo":"descricao 2","estabelecimento":[],"evento":[],"quantidade":"50"}
      });

    $httpBackend.when('PUT', `${url}/5`)
      .respond({
        code: 200,
         data: {"id":"4","createdAt":1496447729,"name":"voucher 2","dataInicio":"12:00","dataFim":"01:00","titulo":"descricao 2","estabelecimento":[],"evento":[],"quantidade":"50"}
      });

    $httpBackend.when('POST', `${url}`)
      .respond({
        code: 200,
         data: {"id":"4","createdAt":1496447729,"name":"voucher 2","dataInicio":"12:00","dataFim":"01:00","titulo":"descricao 2","estabelecimento":[],"evento":[],"quantidade":"50"}
      })
  }));

  it('Testar findAll', () => {

    voucherService.findAll().then((vouchers) => {
      expect(voucher).lengthOf(2);
      expect(voucher[0]).an.object();
      expect(voucher[0]).have("id");
      expect(voucher[0]).have("name");
    });

  });

  it('Testar findById', () => {

    voucherService.findById(5).then((voucher) => {
      expect(voucher).an.object();
      expect(voucher).have("id");
      expect(voucher).have("name");
    })

  });

  it('Testar updateById', () => {
    
    voucherService.updateById(5, {}).then((voucher) => {
      expect(voucher).an.object();
      expect(voucher).have("id");
      expect(voucher).have("name");
    });

  });

  it('Testar createById', () => {

    voucherService.createById({}).then((voucher) => {
      expect(voucher).an.object();
      expect(voucher).have("id");
      expect(voucher).have("name");
    });

  });
});
