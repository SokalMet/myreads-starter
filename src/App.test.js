import React from 'react'
import {Route} from 'react-router-dom'
import { LocalStorage } from 'jest-localstorage-mock';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App'

Enzyme.configure({ adapter: new EnzymeAdapter() });

it('renders without crashing', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('[data-test="component-app"]').length).toBe(1)
})

it('has two routes', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find(Route).length).toBe(2)
})


