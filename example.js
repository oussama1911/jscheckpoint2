function reverseString(ch) {
    chi = ""
    for (var i = ch.length - 1; i >= 0; i--) {
        chi += ch[i];

    }
    return chi;
}


function countcharacthers(ch) {
    chi = 0
    for (var i = 0; i < ch.length; i++) {
        chi += 1;


    }

    return chi
}


function minmaxvalues(arr) {
  var   min = arr[0] 
  var   max = arr[0]
    for (var i = 0; i < array.length; i++) {
       if (arr[i] > max) {
       max = arr[i]
       }
       if (arr[i] < min) {
        min = arr[i]
       }
        
    }
    return [min,max]
}



function sumArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
        
    }
    return sum;
}


function factorial(n) {
    var result = 1
    for (var i = 1; i <= n ; i++) {
       result *= i ;
        
    }

    return result;
    
}

function isPrime(num) {
    var prime = true ;
    for (var i = 2; i < num; i++) {
      if (num % i == 0) {
         prime = false;
      }
        
    }
    return prime;
 
}