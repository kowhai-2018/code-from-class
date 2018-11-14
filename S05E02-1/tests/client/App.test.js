import React from 'react'
import { shallow, mount } from 'enzyme'

// Nock lets us pretend to be the API! Our client thinks it's making API requests as normal, but we
// can control what gets sent back to it.
import nock from 'nock'

import App from '../../client/components/App'
import WidgetListItem from '../../client/components/WidgetListItem'

const API_URL = 'http://localhost:3000/v1'
const WIDGETS = [
  { 'id': 1, 'name': 'Red widget', 'price': 23.45, 'mfg': 'Acme Inc.', 'inStock': 4 },
  { 'id': 2, 'name': 'Blue widget', 'price': 423.47, 'mfg': 'Acme Inc.', 'inStock': 8 },
  { 'id': 3, 'name': 'Yellow widget', 'price': 123.4, 'mfg': 'Acme Inc.', 'inStock': 3 },
  { 'id': 4, 'name': 'Yellow widget', 'price': 110.99, 'mfg': 'Acme Inc.', 'inStock': 2 },
  { 'id': 5, 'name': 'Yellow widget', 'price': 100.5, 'mfg': 'Acme Inc.', 'inStock': 9 }
]

beforeAll(() => {
  nock(API_URL)
    .persist()
    .get('/widgets')
    .reply(200, WIDGETS)
})

test('nock is working', () => {
  const wrapper = mount(<App />)
  expect(wrapper.find(<WidgetListItem />).length).toBe(3)
})

afterAll(() => {
  nock.cleanAll()
})
