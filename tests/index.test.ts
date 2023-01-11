import { merge } from '../src/index';

describe('testing index file', () => {

    test('Not to be null', () => {
        expect(merge([1, 3, 5, 7, 9], [2, 4, 6, 8, 10])).not.toBeNull;
    });

    test('Test merge 2 collection', () => {
        const array_test1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        const merge_test1: number[] = merge([1, 3, 5, 7, 9], [2, 4, 6, 8, 10])

        const array_test2: number[] = [11, 22, 33, 44, 55, 66, 77, 88, 99]
        const merge_test2: number[] = merge([11, 22, 44, 66, 88], [33, 55, 66, 77, 99])

        for(let index in array_test1 ) {
            expect(merge_test1[index]).toBe(array_test1[index]);
        }
        for(let index in array_test2 ) {
            expect(merge_test2[index]).toBe(array_test2[index]);
        }
    });
    
    test('Collection doesnt contain value', () => {
        const array_test: number[] = [2, 4, 6, 8, 10]
        const merge_test1: number[] = merge([], [2, 4, 6, 8, 10])
        const merge_test2: number[] = merge([2, 4, 6, 8, 10], [])
        for(let index in array_test ) {
            expect(merge_test1[index]).toBe(array_test[index]);
        }
        for(let index in array_test ) {
            expect(merge_test2[index]).toBe(array_test[index]);
        }
    });
});