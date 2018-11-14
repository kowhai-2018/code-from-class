import request from 'supertest'

import app from '../../server/server'

test.only('GET /api/v1/widgets', () => {
  expect.assertions(1)
  return request(app)
    .get('/api/v1/widgets')
    .then(res => {
      expect(res.body.length).toBe(5)
    })
})

// test('POST /api/v1/widgets', () => {
//   expect.assertions(1)
//   return request(app)
//     .post('/api/v1/widgets')
//     .send({ name: 'test' })
//     .then(res => {
//       return request(app)
//         .get('/api/v1/widgets')
//         .then(res => {
//           expect(res.body.length).toBe(6)
//         })
//     })
// })
