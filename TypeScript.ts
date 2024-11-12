const PRINT_LOOP_MAX: number = 100;

for(let i: number = 1; i <=PRINT_LOOP_MAX; i++) {
    switch(i%15) {
        case 0: //When i is divisible by fifteen.
        console.log(i, "fizzbuzz");
        break;
        case 3: //When i is divisible by three.
        case 6:
        case 9:
        case 12:
        console.log(i, "fizz");
        break;
        case 5: //When i is divisible by five.
        case 10:
        console.log(i, "buzz");
        break;
        default: console.log(i);
        break;
        
    }
}


  
