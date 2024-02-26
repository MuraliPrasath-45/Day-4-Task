1. a). //Anonymous : function(array){
                  for(var i = 0 ; i< array.length ; i++){
                        if(array[i]%2!=0){
                           console.log(array[i])
                        } 
                   }
                }

  IIFE :  (function(array){
             for(var i = 0 ; i< array.length ; i++){
                        if(array[i]%2!=0){
                           console.log(array[i])
                        } 
                   }
             })([1,2,3,4]) 

b).  //Anonymous function
   function titleCase() {
    let str=("hello world".toLowerCase().split(" "));
 
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  console.log(str.join(" "));
}
titleCase()

 //IIFE function
   (function(){
   let str=("hello world".toLowerCase().split(" "));

 for (let i = 0; i < str.length; i++) {
   str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
 }
 console.log(str.join(" "));
})();

c).   //Anonymous function
    function sum() {
        let str=[50,45,78];
        let sum=0;
      for (let i = 0; i < str.length; i++) {
        sum +=str[i];
      }
     console.log(sum);
    }
    sum();

  //IIFE function
   (function(){
    let str=[50,45,78];
   let sum=0;
 for (let i = 0; i < str.length; i++) {
   sum +=str[i];
 }
console.log(sum);
})();

d).  //anonymous function
const primenumber=function(){
    var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    numArray = numArray.filter((number) => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    
    console.log(numArray);
    };
    primenumber();

//IIFE function
(function(){
    var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    numArray = numArray.filter((number) => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    
    console.log(numArray);
    })();

f).    //anonymous function
   const median= function(){
    function getMedian(ar1, ar2, n)
       {
         let j = 0;
         let i = n - 1;
         while (ar1[i] > ar2[j] && j < n && i > -1)
         {
           let temp = ar1[i];
           ar1[i] = ar2[j];
           ar2[j] = temp;
           i--; j++;
         }
         ar1.sort(function(a, b){return a - b});
         ar2.sort(function(a, b){return a - b});
         return parseInt((ar1[n - 1] + ar2[0]) / 2, 10);
       }
        
       let ar1 = [ 1, 12, 15, 2, 38 ];
       let ar2 = [ 2, 13, 17, 30, 45 ];
     
       let n1 = 5;
       let n2 = 5;
       if (n1 == n2)
         console.log(getMedian(ar1, ar2, n1));
       
   };median();

  //IIFE function
    (function(){
        function getMedian(ar1, ar2, n)
           {
             let j = 0;
             let i = n - 1;
             while (ar1[i] > ar2[j] && j < n && i > -1)
             {
               let temp = ar1[i];
               ar1[i] = ar2[j];
               ar2[j] = temp;
               i--; j++;
             }
             ar1.sort(function(a, b){return a - b});
             ar2.sort(function(a, b){return a - b});
             return parseInt((ar1[n - 1] + ar2[0]) / 2, 10);
           }
            
           let ar1 = [ 1, 12, 15, 2, 38 ];
           let ar2 = [ 2, 13, 17, 30, 45 ];
         
           let n1 = 5;
           let n2 = 5;
           if (n1 == n2)
             console.log(getMedian(ar1, ar2, n1));
           
       })();

g).     //anonymous function
 const remove=   function(){
let chars = [1,2,3,1,5,5];
let uniqueChars = [...new Set(chars)];

console.log(uniqueChars);
};
remove();

 //IIFE function
(function(){
   
    let chars = [1,2,3,1,5,5];
    let uniqueChars = [...new Set(chars)];
    console.log(uniqueChars);
        
    })();

h).     //anonymous function
   var rotate = function() {
    let nums=[1,2,3,6];
     let k=2;
   for (let i = 0; i < k; i++) {
       nums.unshift(nums.pop()) ;
   }
  console.log(nums);
};rotate();   
  
  
  // IIFE function
 (function(){
    let nums=[1,2,3,6];
     let k=2;
   for (let i = 0; i < k; i++) {
       nums.unshift(nums.pop()) ;
   }
 console.log(nums);
})();


//


2. a). //Arrow Function : oddNumbers = (array) => {
                   for(var i = 0 ; i< array.length ; i++){
                        if(array[i]%2!=0){
                           console.log(array[i])
                        } 
                   }
                        }

b).  //arrow function
  const tittlecaps=()=>{
    let str=("hello world".toLowerCase().split(" "));
 
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  console.log(str.join(" "));
 }; 
 tittlecaps();

c).   //arrow function
    const sum=()=>{
        let str=[50,45,78];
           let sum=0;
         for (let i = 0; i < str.length; i++) {
           sum +=str[i];
         }
        console.log(sum);
        };
        sum();

d).     //arrow function
    const prime=()=>{
        var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];
           
           numArray = numArray.filter((number) => {
             for (var i = 2; i <= Math.sqrt(number); i++) {
               if (number % i === 0) return false;
             }
             return true;
           });
           console.log(numArray);
       };
       prime();Return all the prime numbers in an array

e).  //arrow function
const ask=() =>{
    var myArray = ['dad', 'cecarar', 'honda', 'malayalam'];   
   var b = myArray.filter(function(c,d,f){
   var Cur = c.split('').reverse().join('');
   if(c == Cur){
   console.log( myArray[d] );
   }
   });
   
 };ask();

//
