# Count and Say.
The [count-and-say](https://leetcode.com/problems/count-and-say/)  sequence is a sequence of digit strings defined by the recursive formula: 

    `countAndSay(1) = "1"`
    ```countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string
    ```.


Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

### Example 1
   ```Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
   Output: true
   Explanation: sentence contains at least one of every letter of the English alphabet.
   ```

### Example 2:

    Input: sentence = "leetcode"
    Output: false


### Approach
- Below is the idea to solve the problem
------------------------------------------------
Create a mark[] array of Boolean types and iterate through all the characters of the string and mark it as visited. Lowercase and Uppercase are considered the same. So ‘A’ and ‘a’ are marked in index 0 and similarly ‘Z’ and ‘z’ are marked in index 25.

After iterating through all the characters check whether all the characters are marked or not. If not then return false as this is not a pangram else return true. 