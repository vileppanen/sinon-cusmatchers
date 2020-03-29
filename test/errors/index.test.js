const errorsModule = require('../../dist/bundle')
describe('errors module', () => {
  describe('#matchError', () => {
    let mock
    const { matchError } = errorsModule
    beforeEach(() => {
      mock = sinon.stub()
    })
    it('should match Error object with specified message', () => {
      const err = new Error('Foobar')
      mock(err)
      expect(mock).to.have.been.calledWith(matchError('Foobar'))
    })
  })
})
