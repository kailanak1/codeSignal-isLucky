## Solution to Code Signal Arcade #11 isLucky

## Problem 
Given an even integer, return true if the first half of numbers equals the second half. 

## Process 

1. Create an array of integers

```

    const arr = [] 
    while (n > 0){
        let lastDigit = n % 10 
        arr.push(lastDigit)
        n = Math.floor(n/10)
    }
    
```
    
2. Break the array into two halves

```
    const half = Math.ceil(arr.length / 2);
    const firstHalf = arr.splice(0, half)
    const secondHalf = arr.splice(-half)
```

3. Sum up the totals of each half; return true if the totals match

```
    
    let totalOne = 0; 
    let totalTwo = 0;
    for(let i = 0; i < firstHalf.length; i++){
        totalOne += firstHalf[i]
    }
    
    for(let i =0; i < secondHalf.length; i++){
        totalTwo += secondHalf[i]
    }
    
    if(totalOne === totalTwo){
        return true
    } else {
        return false
    }
 ```

