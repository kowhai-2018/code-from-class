import request from 'supertest'

import server from '../server/server'

test('/message equals what I thought it would', () => {
  expect.assertions(1)

  const expected = {
    message: 'Hi I am a message'
  }
  return request(server)
    .get('/message')
    .then(res => {
      const actual = res.body
      expect(actual).toEqual(expected)
    })
})

test.only('/message matches the last snapshot', () => {
  expect.assertions(1)

  return request(server)
    .get('/message')
    .then(res => {
      expect(res.body).toMatchSnapshot()
    })
})
