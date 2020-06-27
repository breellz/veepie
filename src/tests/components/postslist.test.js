import React from 'react'
import {shallow} from 'enzyme'
import Posts from '../fixtures/posts'
import {PostList} from '../../components/PostList'

test('should render postslist with posts', ()=>{
    const renderer = shallow(<PostList posts = {Posts}/>)
    expect(renderer).toMatchSnapshot()
})

test('should render postlist with empty message', ()=>{
    const wrapper = shallow(<PostList posts = {[]} />)
    expect(wrapper).toMatchSnapshot()
})