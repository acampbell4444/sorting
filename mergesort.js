

function mergeSort(arr) {								//4,3,1,2 
	if(arr.length<2){return arr}					    // merge (   mS([4,3]), mS([1,2])    )
	var left = split(arr)[0];							//merge (merge(  ms([4]), ms([3]))  , (merge(  ms([1]), ms([2]))
	var right = split(arr)[1];							// merge ( merge(4,3)  , merge(1,2)
	return merge(mergeSort(left),mergeSort(right));     // merge ( [3,4] , [1,2 )
}														//1,2,3,4


function split(arr) {
	if(arr.length<2){return arr}
		var mid = Math.ceil(arr.length/2);
	var left = arr.slice(0,mid);
	var right = arr.slice(mid);
	return [left,right]
}

function merge(left,right) {
	var result = [];
	while (left.length && right.length) {
		if (left[0] <= right[0]) {
			result.push(left.shift());
		} else {
			result.push(right.shift());
		}
	}
	while (left.length) { result.push( left.shift() ) };
	while (right.length) { result.push( right.shift() ) };
	return result;
}
