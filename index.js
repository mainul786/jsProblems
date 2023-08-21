const numbers =  [45, 20, 88, 78, 98, 77, 66, 62, 32, 23, 11];
console.log(Array.isArray(numbers));

const number = [78, 26, 63, 20];
console.log(number.includes(26));

console.log(numbers.concat(number));

console.log(number.slice(0, 3));
console.log(numbers.splice(0, 6));
console.log(numbers);


// remove duplicate items form array
const names = ['bacchu', 'mainul','pappu sarkar', 'milon', 'milon', 'pappu sarkar'];

function duplicate(names){
    let duplicateName = [];
    for(let i = 0; i < names.length; i++ ){
        const name = names[i];
        // console.log(name);
        if(duplicateName.includes(name) === false){
            duplicateName.push(name)
        }
    }
    return duplicateName;
}

const originalName = duplicate(names);
console.log(originalName);