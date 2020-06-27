import React from 'react'
import { shallow } from "enzyme";
import  PostlistItem from '../../components/PostlistItem';
import posts from '../fixtures/posts'

test('should render post list item with posts', ()=>{
    const wrapper = shallow(<PostlistItem {...posts[0]} />)
    expect(wrapper).toMatchSnapshot()
})