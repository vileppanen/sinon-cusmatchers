const sinon = require('sinon')

const matchError = message => {
  return sinon.match.instanceOf(Error).and(sinon.match.has('message', message))
}

module.exports = {
  matchError
}
