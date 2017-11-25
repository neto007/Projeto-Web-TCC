import { expect } from 'chai';
import Controller from './evento-view.controller';

describe('evento-view Controller', () => {
  it('Should be constructed', () => {
    // Arrange
    const controller = new Controller();

    // Act

    // Assert
    expect(controller).not.to.be.undefined;
  });
});
