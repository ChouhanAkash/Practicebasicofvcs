let arr=[1,2,3,4,5,6,7];
let even="";
let odd="";
for(let i=0;i<=arr.length;i++){
    if(arr[i]%2==0){
        even+=arr[i];
    }
    else{
        odd+=arr[i];
    }
}
console.log(even);
