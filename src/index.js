/* 1. Ödev Asal sayı */

let IsPrime = (number) => {
    for (let index = 2; index < number; index++) {
        if (number % index == 0) {
            return false;
        }
        return true;
    }
}

let IsPrimeArray = (...numbers) => {
    numbers.forEach(number => {
        if (IsPrime(number)) {
            console.log(`${number} is prime.`);
        }
        else{
            console.log(`${number} isn't prime.`);
        }
    });
}


IsPrimeArray(1,2,3,4,5,6,7);

/* 1. Ödev Asal sayı */

/* 2. Ödev Arkadaş sayı */

let AreFriendNumbers = (a,b) => {
    let aDividersSum = 0;
    let bDividerSum = 0;
    for (let i = 0; i < a; i++) {
        if (a % i == 0) {
            aDividersSum += i;
        }
    }
    if (b == aDividersSum) {
        for (let i = 0; i < b; i++) {
            if (b % i == 0) {
                bDividerSum += i;
            }
        }

        if (a == bDividerSum) {
            return true;
        }
    }
    return false;
}

if (AreFriendNumbers(220,287)) {
    console.log(`Arkadaş sayılardır.`);
}
else
{
    console.log(`Arkadaş sayı değildir.`);
}

/* 2. Ödev Arkadaş sayı */

/* 3. Ödev Arkadaş sayı */

let IsPerfectNumber = (lastNumber)=> {
    let perfectNumbers = [];

    for (let number = 1; number <= lastNumber; number++) {
        let dividerSum = 0;
        for (let i = 1; i < number; i++) {
            if (number % i == 0) {
                dividerSum+= i;
            }
        }    
        if (dividerSum == number) {
            perfectNumbers.push(number);
        }    
    }
    
    return perfectNumbers
}

console.log(IsPerfectNumber(1000));


/* 3. Ödev Arkadaş sayı */

/* 4. Ödev Asal sayı */

let IsPrimeNumber = (lastNumber)=> {
    let perfectNumbers = [];

    for (let number = 1; number <= lastNumber; number++) {
        let isPrime = true;
          for (let i = 2; i < number; i++) {
              if(number % i == 0){
                isPrime = false;
                break;
              }
            if (isPrime) {
                perfectNumbers.push(number);
                
            }
          }
    }
    
    return perfectNumbers
}
 
console.log(IsPrimeNumber(1000));


/* 4. Ödev Asal sayı */