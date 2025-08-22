# Check If sentence is a Pangram.

A [pangram](https://leetcode.com/problems/check-if-the-sentence-is-pangram) is a sentence where every letter of the English alphabet appears at least once.

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

---

Create a mark[] array of Boolean types and iterate through all the characters of the string and mark it as visited. Lowercase and Uppercase are considered the same. So ‘A’ and ‘a’ are marked in index 0 and similarly ‘Z’ and ‘z’ are marked in index 25.

After iterating through all the characters check whether all the characters are marked or not. If not then return false as this is not a pangram else return true.
