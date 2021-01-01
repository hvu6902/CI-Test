function inputArray(arr1, arr2){
    let newArr = []
    
    for (let i = 0; i < arr1.length; i++) {
        if(arr2.indexOf(arr1[i]) < 0){
            newArr.push(arr1[i])
        }
        
    }
    for (let i = 0; i < arr2.length; i++) {
        if(arr1.indexOf(arr2[i]) < 0){
            newArr.push(arr2[i])
        }
        
    }
    return newArr
}
let arr1 = [1, 2, 'a'];
let arr2 = [1, 3, 'b'];


console.log(inputArray(arr1, arr2));