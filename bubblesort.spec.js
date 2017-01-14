describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    //expect( bubbleSort([]) ).toEqual( [] );
    expect( bubbleSort([2,5,1,6,7]) ).toEqual( [1,2,5,6,7] );
  });
});