import React from 'react';
import { shallow } from 'enzyme'
import Nav from '../../components/Nav'

test('should render navbar correctly', ()=>{
    const wrapper = shallow(<Nav />)
    expect(wrapper).toMatchSnapshot()
})