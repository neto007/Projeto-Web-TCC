import { expect } from 'chai';
import Controller from './voucher-create.controller';

describe('voucher-create Controller', () => {
  it('Should be constructed', () => {
    // Arrange
    const controller = new Controller();

    // Act

    // Assert
    expect(controller).not.to.be.undefined;
  });
});
