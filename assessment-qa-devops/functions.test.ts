const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('return array from array', () => {
        expect(shuffleArray([1, 2, 3, 4])).toEqual(expect.arrayContaining([1, 2, 3, 4]));
    });
    test('give argument and return same length', () =>{
        expect(shuffleArray([1, 2, 3])).toHaveLength(3);
    })
})