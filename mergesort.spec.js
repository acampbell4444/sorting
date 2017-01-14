describe('Split Array function', function() {


  it('is able to split an array into two halves', function() {
  	var evenArray = [1,2,3,4];
    var oddArray = [5,6,7,8,9]
     expect(split(evenArray) ).toEqual([[1,2],[3,4]]);
     expect(split(oddArray) ).toEqual([[5,6,7],[8,9]]);
  });
});

describe('Merge Sort', function(){
  var evenArray = [1,2,3,4];
  var oddArray = [5,6,7,8,9];
  var mixedArray = [3,1,9,33,5,77];
  it('is able to merge two sorted arrays into one sorted array', function(){
     expect(merge(evenArray,oddArray)).toEqual([1,2,3,4,5,6,7,8,9]);
     expect(mergeSort(mixedArray)).toEqual([1,3,5,9,33,77]);
  });
});