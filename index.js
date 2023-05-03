/* 1. Reqemlerden ibaret arrayda duplicate reqemi qaytarin 
(bir funksiya teyin edirik ve parameter kimi reqemlerden ibaret array qebul edir. 
Arrayde yalniz bir eded duplicate olacaq) */

function findArrDubl(arr) {
    for(let i=0;i<arr.length-1;i++){
        if (arr[i]===arr[i+1]) return arr[i];
    }
}

console.log(findArrDubl([1,2,3,4,4,5,6]));


/* 2.  Arraydaki en boyuk reqemi qaytarin 
(bir funksiya teyin edirik ve parameter kimi reqemlerden ibaret array qebul edir): */

function arrMaxEelement(arr)
{
    let max =arr[0];
    for(let i=0;i<arr.length;i++){
        if (arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}

console.log(arrMaxEelement([1,2,3,4,4,5,6]));

/*3. Arrayin elementlerini 2ye vurub arrayi qaytarin 
(bir funksiya teyin edirik ve parameter kimi reqemlerden ibaret array qebul edir):*/

function arrayHandler(arr) {
    for(let i=0;i<arr.length;i++){
        arr[i]=arr[i]*2;
        }
        return arr;
    }

    console.log(arrayHandler([1,2,3,4,4,5,6]));

   