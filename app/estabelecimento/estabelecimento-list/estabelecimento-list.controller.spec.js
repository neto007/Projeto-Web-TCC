import { expect } from 'chai';
import Controller from './estabelecimento-list.controller';

describe('estabelecimento-list Controller', () => {
  it('Should be constructed', () => {
    // Arrange
    const controller = new Controller();

    // Act

    // Assert
    expect(controller).not.to.be.undefined;
  });
});
