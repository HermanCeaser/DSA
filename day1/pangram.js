/**
 * @param {string} sentence
 * @return {boolean}
 */
 var checkIfPangram = function(sentence) {
    // Create an array to mark characters present in the string
    mark = new Array(26).fill(false);
    // console.log(mark)
    let index = 0;
    
    for (let i=0; i< sentence.length; i++){
        if('a' <= sentence[i] && sentence[i] <= 'z'){
            index = sentence.charCodeAt(i) - 'a'.charCodeAt(0)
        }
        else continue;
        
        mark[index] = true;
    }
    
    // Return false if any character is unmarked
    for (let i = 0; i <= 25; i++){
        if (mark[i] == false)
            return false;
    }
    
    // If all characters were present
    return true;
    
};

// Driver Program to test above functions
let str = "The quick brown fox jumps over the lazy dog";
 
document.write(str,"</br>")
 
if (checkIfPangram(str) == true)
    document.write("\nis a pangram");
else
    document.write("\nis not a pangram");