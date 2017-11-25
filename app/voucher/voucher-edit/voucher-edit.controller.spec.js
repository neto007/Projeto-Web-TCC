import { expect } from 'chai';
import Controller from './vouchers-edit.controller';

describe('vouchers-edit Controller', () => {
  it('Should be constructed', () => {
    // Arrange
    const controller = new Controller();

    // Act

    // Assert
    expect(controller).not.to.be.undefined;
  });
});
