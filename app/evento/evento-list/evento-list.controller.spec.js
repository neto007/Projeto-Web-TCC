import { expect } from 'chai';
import Controller from './evento-list.controller';

describe('evento-list Controller', () => {
  it('Should be constructed', () => {
    // Arrange
    const controller = new Controller();

    // Act

    // Assert
    expect(controller).not.to.be.undefined;
  });
});
