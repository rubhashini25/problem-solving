const arr = [[3], 4, [2], [5], 1, 6];
let nested = [];
let notNested = [];
let ans =[];

for(let i=0;i<arr.length;i++){
    if(Array.isArray(arr[i]))
      nested.push([arr[i][0]]);
    else
      notNested.push(arr[i]);
}

console.log("After separating all the elements:");

for(let i=0;i<nested.length;i++)
{
    console.log(nested[i]);
    console.log(typeof nested[i]);
}
console.log();

for(let i=0;i<notNested.length;i++){
    console.log(notNested[i]);
     console.log(typeof notNested[i]);
}

//sorting the not nested array
for(let i=0;i<notNested.length;i++)
{
    for(let j=i+1;j<notNested.length;j++){
        if(notNested[i] > notNested[j]){
            let t = notNested[i];
            notNested[i] = notNested[j];
            notNested[j] = t;
        }
    }
}
console.log();
console.log("After sort the not nested array:");
for(let i=0;i<notNested.length;i++)
console.log(notNested[i]);

//sorting the nested array
for(let i=0;i<nested.length;i++){
    for(let j=i+1;j<nested.length;j++){
        if(nested[i][0] > nested[j][0]){
            let t = nested[i][0];
            nested[i][0] = nested[j][0];
            nested[j][0] = t;
        }
    }
}
console.log();
console.log("After sort the nested array:");

for(let i=0;i<nested.length;i++)
console.log(nested[i]);

let k=0,z=0;

while(k<notNested.length && z<nested.length){
     if(notNested[k] > nested[z][0]){
         ans.push(nested[z]);
         z++;
     }
     else{
         ans.push(notNested[k]);
         k++;
     }
}

while(k<notNested.length){
    ans.push(notNested[k]);
    k++;
}

while(z<nested.length){
    ans.push(nested[z]);
    z++;
}

console.log();
console.log("After merging the two sorted arrays");

for(let i=0;i<ans.length;i++)
console.log(ans[i]);

