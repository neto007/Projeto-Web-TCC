import { expect } from 'chai';
import Controller from './galeria-create.controller';

describe('galeria-create Controller', () => {
  it('Should be constructed', () => {
    // Arrange
    const controller = new Controller();

    // Act

    // Assert
    expect(controller).not.to.be.undefined;
  });
});
