const fizzBuzz = {
    fizzBuzz: function (data) {
        for (let i = 1;  i <= data; i++) {
            const data1 = i % 3 === 0 && i % 5 === 0;
            const data2 = i % 3 === 0;
            const data3 = i % 5 === 0;
            if(data1) {
                console.log(`FizzBuzz ${i}`);
            }else if(data2) {
                console.log(`Fizz ${i}`);
            }else if(data3) {
                console.log(`Buzz ${i}`);
            }else {
                console.log(i);
            }
        }
    }
}

fizzBuzz.fizzBuzz(100);