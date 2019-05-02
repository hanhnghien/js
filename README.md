Install `Jest` using `yarn`:

    yarn add --dev jest

Or `npm`:

    npm install --save-dev jest
    
Run

    yarn test
    node salary.js
Or

    npm run test
    node salary.js
    
#Requirement
```javascript
// Explanation
var calculateSalary = (age, kid, car, salary) => {
    // Country Tax for salaries is 20%
    var tax = 0.20;
    // If an employee older than 50 we want to add 7% to his salary
    if (age > 50) {
        salary += 0.07 * salary;
    }
    // If an employee wants to use a company car we need to deduct $500
    if (car) {
        salary -= 500;
    }
    // If an employee has more than 2 kids we want to decrease his Tax by 2%
    if (kid > 2) {
        tax -= 0.02;
    }
    salary -= tax * salary;

    return salary;
};

// Situation
// Alice is 26 years old, she has 2 kids and her salary is $6000
var alice = calculateSalary(26, 2, 0, 6000);
// Bob is 52, he is using a company car and his salary is $4000
var bob = calculateSalary(52, 0, 1, 4000);
// Charlie is 36, he has 3 kids, company car and his salary is $5000
var charlie = calculateSalary(36, 3, 1, 5000);

console.log(alice, bob, charlie);
```

Design Patterns: Singleton, Factory, Iterator, Decorator, Strategy and Mediator
