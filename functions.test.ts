const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('shuffleArray should return an array', () =>{
        let arr = [1,2,3,4,5]
        expect(shuffleArray).toBe(arr)
    })

    test('check to see if length is the same after running function', () => {
    let arr = [1,2,3,4,5]
    let result = shuffleArray(arr)
    expect(arr.length).toBe(result.length)
    })
    test ('return array with same items', () => {
        let arr = [1,2,3,4,5]
        let result = shuffleArray(arr)
        let myVar = true
        for(let i=0; i<result.length; i++){
            if(arr.includes(result[i])===false){
                myVar= false
                return
            }
        }
        expect(myVar).toBe(true)
    })
})





