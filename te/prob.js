let string = 'slflasdjssssssaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'

function long(str){
    let obj = {}
    for(let char of str){
        if(obj[char]){
            obj[char]++
        }
        else{
            obj[char] = 1
        }
    }

    let maxKey = 0
    let maxTimes = 0

    for(let key in obj){
        if(obj[key] > maxTimes ){
            maxTimes = obj[key]
            maxKey = key
        }
    }
    return `${maxKey} is longest and it present ${maxTimes}`
}
// console.log(long(string))

function removeDup(str){
    let obj = {}
    let result = ''
    for(let key of str){
        if(!obj[key]){
            obj[key] = 1
            result+=key
        }
    }
    return result
}
// console.log(removeDup('tttttttthhhhhhhhhsalefsbrrrrrrrrrrrrrrr'))


// function reverse(str){
//     let result = ' '
//     for(let i=str.length-1;  i>=0; i--){
        
//         result+=str[i]
//     }
//     return result
// }
// console.log(reverse('Tawfiq'))



// Second Laegest

function secondLargest(nums){
    let firstL = -Infinity
    let SecondL = -Infinity

    for(let i=0; i<nums.length; i++){
        if(nums[i]>firstL){
            SecondL = firstL
            firstL = nums[i]
        }
        else if(nums[i]>SecondL && nums[i] !== firstL){
            SecondL  = nums[i]
        }
    }
    return SecondL
}
// console.log(secondLargest([7,9,5,4,0,3,9,0,4,9,5,8]))

