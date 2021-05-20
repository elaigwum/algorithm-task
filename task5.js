function convertFahrToCelsius(val){
    if(isNaN(val)){
      return `${val} is not a valid number but a/an ${typeof val}`;
    }
    
    return ((val - 32) * 5/9).toFixed(4);
  }
  
  convertFahrToCelsius(0);
  
  
  function checkYuGiOh(n) {
      if(isNaN(n)) return 'invalid parameter';
  
      let arr = [];
    
      for(let i = 1; i < n; i++) {
        arr.push(i);
      }
  
      for(let i = 0; i < arr.length; i++) {
          if(arr[i] % 2 == 0) {
              arr[i] = 'yu';
          }
  
          if(arr[i] % 3 == 0) {
              arr[i] = 'gi';
          }
  
          if(arr[i] % 5 == 0) {
              arr[i] = 'oh';
          }
  
          if(arr[i] % 6 == 0) {
              arr[i] = 'yu-gi';
          }
  
          if(arr[i] % 10 == 0) {
              arr[i] = 'yu-oh';
          }
  
          if(arr[i] % 15 == 0) {
              arr[i] = 'gi-oh';
          }
  
          if(arr[i] % 30 == 0) {
              arr[i] == 'yu-gi-oh';
          }
      }
    
      console.log(arr);
      return arr;
  }
  
  checkYuGiOh(25);