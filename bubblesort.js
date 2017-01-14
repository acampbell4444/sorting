function swap(arr){   
	return [arr[1], arr[0]];
 }

  function bubbleSort(array) {   
	var flag = 'No'; 	
	for(var i =0;i<array.length-1;i++){     
		if(array[i] > array[i+1]){       
			var beforeSwapped = [array[i], array[i+1]]       
			var swapped = swap(beforeSwapped);      
			array.splice(i, 2, swapped[0], swapped[1])       
			var flag = 'Yes';     
		}     
	}    
	if(flag === 'No') {
		return array     
	}else {
		return bubbleSort(array);
	 }
}

