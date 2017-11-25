import angular from 'angular';
import angularMock from 'angular-mocks';

import { expect } from 'chai';
import Service from './evento.service';


describe('Evento Service', () => {


  let eventoService;

  beforeEach(angular.mock.module('front.services'));

  beforeEach(inject(($injector) => {
    let $httpBackend = $injector.get('$httpBackend');
    eventoService = $injector.get("EventoService");
    
    let settings = $injector.get("SettingsService");

    let url = settings.getApiUrlWithEndpoint('evento');
    

    $httpBackend.when('GET', url)
      .respond({
        code: 200,
        message: "Lorem ipsum",
        data: [
          {"id":"1","createdAt":1496447729,"nome":"Lollapalooza","imagemDoEvento":"http://static.stereogum.com/uploads/2014/03/lollapalooza-lineup-2014-poster-640x989.jpg","telefone":"4430314455","celular":"44998214455","descricao":"Evento foda","dataInicio":"12:00","dataFim":"01:00","rua":"Avenida das cores","numero":"355","cep":"35487453","bairro":"Zona 48"},
          {"id":"1","createdAt":1496447729,"nome":"Lollapalooza","imagemDoEvento":"http://static.stereogum.com/uploads/2014/03/lollapalooza-lineup-2014-poster-640x989.jpg","telefone":"4430314455","celular":"44998214455","descricao":"Evento foda","dataInicio":"12:00","dataFim":"01:00","rua":"Avenida das cores","numero":"355","cep":"35487453","bairro":"Zona 48"}
        ]
      });

    $httpBackend.when('GET', `${url}/5`)
      .respond({
        code: 200, 
        message: "Lorem ipsum",
        data: {"id":"1","createdAt":1496447729,"nome":"Lollapalooza","imagemDoEvento":"http://static.stereogum.com/uploads/2014/03/lollapalooza-lineup-2014-poster-640x989.jpg","telefone":"4430314455","celular":"44998214455","descricao":"Evento foda","dataInicio":"12:00","dataFim":"01:00","rua":"Avenida das cores","numero":"355","cep":"35487453","bairro":"Zona 48"},
    
      });

    $httpBackend.when('PUT', `${url}/5`)
      .respond({
        code: 200,
        data: {"id":"1","createdAt":1496447729,"nome":"Lollapalooza","imagemDoEvento":"http://static.stereogum.com/uploads/2014/03/lollapalooza-lineup-2014-poster-640x989.jpg","telefone":"4430314455","celular":"44998214455","descricao":"Evento foda","dataInicio":"12:00","dataFim":"01:00","rua":"Avenida das cores","numero":"355","cep":"35487453","bairro":"Zona 48"},
      });

    $httpBackend.when('POST', `${url}`)
      .respond({
        code: 200,
        data: {"id":"1","createdAt":1496447729,"nome":"Lollapalooza","imagemDoEvento":"http://static.stereogum.com/uploads/2014/03/lollapalooza-lineup-2014-poster-640x989.jpg","telefone":"4430314455","celular":"44998214455","descricao":"Evento foda","dataInicio":"12:00","dataFim":"01:00","rua":"Avenida das cores","numero":"355","cep":"35487453","bairro":"Zona 48"},
      })
  }));

  it('Testar findAll', () => {

    eventoService.findAll().then((eventos) => {
      expect(eventos).lengthOf(2);
      expect(eventos[0]).an.object();
      expect(eventos[0]).have("id");
      expect(eventos[0]).have("nome");
    });

  });

  it('Testar findById', () => {

    eventoService.findById(5).then((evento) => {
      expect(evento).an.object();
      expect(evento).have("id");
      expect(evento).have("nome");
    })

  });

  it('Testar updateById', () => {
    
    eventoService.updateById(5, {}).then((evento) => {
      expect(evento).an.object();
      expect(evento).have("id");
      expect(evento).have("nome");
    });

  });

  it('Testar create', () => {

    eventoService.create({}).then((evento) => {
      expect(evento).an.object();
      expect(evento).have("id");
      expect(evento).have("nome");
    });
  });
});
