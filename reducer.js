    /*
    The reduce() method reduces the array to a single value.
    Executes a each value of the array (from left-to-right).
    The return value of the function is stored in an accumulator (result/total).
    does not execute the function for array elements without values.
    does not change the original array.
    */
	
	const numbers = [175, 50, 25];

    const myFunc = (total, num) => {
      console.count("invoked");
      console.log('total', total);
      console.log('num', num);
      return total  - num;
    };
    let value = numbers.reduce(myFunc)
    console.log('value', value);