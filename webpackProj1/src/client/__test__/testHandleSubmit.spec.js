import {handleSubmit} from "../js/formHandler"
import 'babel-polyfill'

describe('Test 1', () => {
    test('Test if function is defined', () => {
        expect(handleSubmit).toBeDefined()
}),
test('if handlesubmit is a function', () => {
    expect(typeof handleSubmit).toBe("function");
})})
