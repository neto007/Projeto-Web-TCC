import { expect } from 'chai';
import Controller from './evento-view-edit.controller';

describe('evento-view-edit Controller', () => {
  it('Should be constructed', () => {
    // Arrange
    const controller = new Controller();

    // Act

    // Assert
    expect(controller).not.to.be.undefined;
  });
});
