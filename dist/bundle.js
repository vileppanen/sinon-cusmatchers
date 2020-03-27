'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var sinon = _interopDefault(require('sinon'));

const matchError = message => {
  if (message) {
    return sinon.match.instanceOf(Error).and(sinon.match.has('message', message))
  }
  return sinon.match.instanceOf(Error)
};

var index = {
  matchError
};

module.exports = index;
