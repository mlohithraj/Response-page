var sortArray = function(nums) {

    const mergeSort=(nums)=>{

        if(nums.length===1){

            return nums;

        }

        const midIndex= Math.floor(nums.length/2);

        const leftArray= nums.slice(0, midIndex);

        const rightArray= nums.slice(midIndex);



        return merge(mergeSort(leftArray), mergeSort(rightArray));

    }

    const merge= (leftArray, rightArray)=>{

        let leftPointer= 0;

        let rightointer= 0;

        while(leftPointer< leftArray.length && rightPointer< rightArray.length){

            if(leftArray[leftPointer]<= rightArray[rightPointer]){

                resultArray.push(leftArray[rightPointer]);

                leftPointer++;

            }

            else{

                resultArray.push(rightArray[rightPointer]);

                rightPointer++;

            }

            return resultArray

            .concat(leftArray.slice(leftPointer))

            .concat(rightArray.slice(rightPointer));

        }

    }

}; 
console.log(sortArray(1,2,3,4,5,6))

let obj = function(a,b){
    return a+b;
}
console.log(obj(4,6));