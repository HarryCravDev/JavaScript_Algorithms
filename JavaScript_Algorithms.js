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
            console.log(str[i]);
            vowelsCount++;
       }
    }
    return vowelsCount
}
