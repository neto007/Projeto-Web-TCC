import { expect } from 'chai';
import Controller from './evento-create.controller';

describe('evento-create Controller', () => {
  it('Should be constructed', () => {
    // Arrange
    const controller = new Controller();

    // Act

    // Assert
    expect(controller).not.to.be.undefined;
  });
});
