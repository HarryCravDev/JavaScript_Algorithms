//  @desc   Split camelCase by uppercase character and replace with a space. 
const camelCase = string => {
    return [...string].map(char => {
        return (char === char.toUpperCase()) ? ` ${char}` : char
    }).join('')
}


//  @desc   Two sum - Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
const twoSum = (nums, target) => {
    const previousValues = {};
    for(let i = 0; i < nums.length; i++){
        const currentNumber = nums[i];
        const neededNumber = target - currentNumber;
        const index1 = previousValues[neededNumber];
        if(index1 != null){
            return [index1, i]
        } else {
            previousValues[currentNumber] = i;
        }
    }
};


//  @desc   Total number of vowels in a given string.
const getCount = (str) => {
    let vowelsCount = 0;
    const vowels = {
        a: 'a',
        e: 'e',
        i: 'i',
        o: 'o',
        u: 'u'
    }
    
    for(let i = 0; i < str.length; i++){
       if(vowels[str[i]] != null){
            vowelsCount++;
       }
    }
    return vowelsCount
}


//  @desc   Array.diff - Function takes two arrays, and returns values that are not included in array 2.
const arrayDiff1 = (a, b) => a.filter(item => b.indexOf(item) === -1);


//  @desc   Array Difference - Function takes two arrays, and returns values that are not shared between both arrays.
const diffArray = (arr1, arr2) => {
    let newArr = [];

    const newArr1 = arr1.filter(item => !arr2.includes(item));
    const newArr2 = arr2.filter(item => !arr1.includes(item));

    newArr = [...newArr1, ...newArr2 ];

    return newArr;
}


//  @desc   Multiplication Tables - Function takes two number values, and returns multiplication tables in an array according to input.
const multiplicationTable = (row,col) => {
    let answer = [];

    for(let i = 0; i < row; i++){
        answer.push([]);
        for(let j = 0; j < col; j++){
            answer[i].push((j + 1) * (i + 1));
        }
    }    
    return answer
}


//  @desc   Delete occurrences of an element if it occurs more than n times - Function takes an array of items and a number for the amount of times each element can appear in the array.
const deleteNth = (arr,n) => {
    let result = {};

    return arr.filter(num => {
        
        result[num] = (result[num] || 0) + 1;

        return result[num] <= n;
    })
}


//  @desc - Function takes two arrays and returns the non-matching elements between the arrays in a new one.
const diffArray = (arr1, arr2) => {
  let newArr = arr1
    .filter((num) => !arr2.includes(num))
    .concat(arr2.filter((num) => !arr1.includes(num)));

  return newArr;
};
