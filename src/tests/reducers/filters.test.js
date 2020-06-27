import filtersReducer from '../../reducers/filters'

test('should set up filters reducers default state', ()=>{
    const state = filtersReducer(undefined, { type: '@@INIT'})
    expect(state).toEqual({
        text: ''
    })
})

test('should set text filter', ()=>{
    const action = {type : 'SET_TEXT_FILTER', text:"holla"}
    const state = filtersReducer(undefined, action)
    expect(state).toEqual({
        text: 'holla'
    })
})