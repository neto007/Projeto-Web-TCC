import { expect } from 'chai';
import Controller from './estabelecimento-edit.controller';

describe('estabelecimento-edit Controller', () => {
  it('Should be constructed', () => {
    // Arrange
    const controller = new Controller();

    // Act

    // Assert
    expect(controller).not.to.be.undefined;
  });
});
