import {setTextFilter} from '../../actions/filters'

test('should set textfilter action object', ()=>{
    const text = "something fun"
    const result = setTextFilter(text)
    expect(result).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    }) 
})

test('should set textfilter with default value', ()=>{
    const result = setTextFilter()
    expect(result).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})