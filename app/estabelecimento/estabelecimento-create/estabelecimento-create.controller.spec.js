import { expect } from 'chai';
import Controller from './estabelecimento-create.controller';

describe('estabelecimento-create Controller', () => {
  it('Should be constructed', () => {
    // Arrange
    const controller = new Controller();

    // Act

    // Assert
    expect(controller).not.to.be.undefined;
  });
});
