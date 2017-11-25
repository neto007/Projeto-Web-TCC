import { expect } from 'chai';
import Controller from './evento-detail.controller';

describe('evento-detail Controller', () => {
  it('Should be constructed', () => {
    // Arrange
    const controller = new Controller();

    // Act

    // Assert
    expect(controller).not.to.be.undefined;
  });
});
