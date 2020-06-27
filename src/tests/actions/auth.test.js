
import { login, logout } from '../../actions/auth'

test('should setup login object',()=>{
    const uid ='123ge';
    const result = login(uid)
    expect(result).toEqual({
        type: 'LOGIN',
        uid
    })
})

test('should setup logout object', ()=>{
    const result = logout()
    expect(result).toEqual({
        type: 'LOGOUT'
    })
})