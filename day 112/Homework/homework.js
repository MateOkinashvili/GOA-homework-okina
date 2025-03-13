class StringHelper {
    static reverse(str) {
      return str.split('').reverse().join('');
    }
  
    static compare(str1, str2) {
      let count = 0;
      for (let i = 0; i < Math.min(str1.length, str2.length); i++) {
        if (str1[i] === str2[i]) {
          count++;
        }
      }
      return count;
    }
  
  }




  
