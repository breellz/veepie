import React from 'react';
import { shallow } from 'enzyme'
import { LoginPage } from '../../components/LoginPage'

test('should render loginpage correctly', ()=>{
    const wrapper = shallow(<LoginPage />)
    expect(wrapper).toMatchSnapshot()
})

test("should call startGooglelogin on button click", ()=>{
    const startGoogleLogin = jest.fn()
    const wrapper = shallow(<LoginPage startGoogleLogin = {startGoogleLogin}/>)
    wrapper.find('button').simulate('click')
    expect(startGoogleLogin).toHaveBeenCalled()

})