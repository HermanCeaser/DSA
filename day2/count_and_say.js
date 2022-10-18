/**
 * @param {number} n
 * @return {string}
 */
 var countAndSay = function(n) {
    // Return 1 if n ==1
    if(n==1) return "1"
    // initialize previous term
    let x = countAndSay(n-1) 
    let i=0;
    let curr = "";
    // loop through all elements
    while(i < x.length){
        let j=x[i];
        n = 0;
        while(i<x.length && x[i] == j){
            n+=1;
            i+=1;
        }
        curr+=n.toString();
        curr+=j;
    }
    return curr
};