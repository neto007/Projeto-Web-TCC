import { expect } from 'chai';
import Controller from './estabelecimento-detail.controller';

describe('estabelecimento-detail Controller', () => {
  it('Should be constructed', () => {
    // Arrange
    const controller = new Controller();

    // Act

    // Assert
    expect(controller).not.to.be.undefined;
  });
});
