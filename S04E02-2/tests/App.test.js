import React from 'react'
import { mount, shallow } from 'enzyme'
import render from 'react-test-renderer'

import App from '../client/components/App'
import List from '../client/components/List'

test('<App />', () => {
  const expected = true
  const wrapper = shallow(<App />)
  const actual = wrapper.containsMatchingElement(List)
  expect(actual).toBe(expected)
})

test('<List /> calls moreWombatInfo when item clicked', () => {
  // Arrange
  const mockCallback = jest.fn()
  const wombats = ['herschel']
  const expected = 1
  const component = <List things={wombats} moreWombatInfo={mockCallback} />

  // Act
  const wrapper = mount(component)
  const li = wrapper.find('li').first()
  li.simulate('click')
  const actual = mockCallback.mock.calls.length

  // Assert
  expect(actual).toBe(expected)
})

test('<App /> matches the last snapshot', () => {
  const actual = render.create(<App />).toJSON()
  expect(actual).toMatchSnapshot()
})
