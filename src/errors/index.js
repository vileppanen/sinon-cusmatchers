import sinon from 'sinon'

const matchError = message => {
  if (message) {
    return sinon.match.instanceOf(Error).and(sinon.match.has('message', message))
  }
  return sinon.match.instanceOf(Error)
}

export default {
  matchError
}