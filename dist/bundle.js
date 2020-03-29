'use strict'

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex.default : ex }

var sinon = _interopDefault(require('sinon'))

const matchError = message => {
  return sinon.match.instanceOf(Error).and(sinon.match.has('message', message))
}

var errors = {
  matchError
}

var src = errors

module.exports = src
