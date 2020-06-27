import React from 'react';
import { shallow } from 'enzyme'
import Comments from '../../components/Comments'

test('should render comments correctly', ()=>{
    const renderer = shallow(<Comments />)
    expect(renderer).toMatchSnapshot()
})