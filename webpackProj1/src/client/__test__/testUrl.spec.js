
import{checkURL} from "../js/checkURL";
describe('Testing checkURL function', () => {
    test('Testing if function is defined', () => {
        expect(checkURL).toBeDefined()
    
    })

    test('Testing url is valid', () => {
        expect(checkURL("https://www.msn.com/ar-eg/?ocid=mailsignout&pc=U591")).toBeTruthy()
      
    })

    test('Testing url is not valid', () => {
        expect(checkURL("msn")).toBeFalsy()
      
    })
})
