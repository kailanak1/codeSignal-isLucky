function isLucky(n) {
    const arr = [] 
    while (n > 0){
        let lastDigit = n % 10 
        arr.push(lastDigit)
        n = Math.floor(n/10)
    }
    
    const half = Math.ceil(arr.length / 2);
    const firstHalf = arr.splice(0, half)
    const secondHalf = arr.splice(-half)
    
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
}
