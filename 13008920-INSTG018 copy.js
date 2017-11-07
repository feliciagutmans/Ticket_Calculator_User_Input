// Student 18008920
// INSTG018 Introduction to Programming and Scripting
// Dr Rob Miller
// Coursework 1

const MAX_AGE=123, CHILD_AGE=4, YOUTH_AGE=16, OLD_AGE=70;

function main()
{
    var userAge, inputError, cost;

    userAge=Number(prompt('Enter your age:')); //asks user for age

    if (userAge < 0 || userAge > MAX_AGE || isNaN(userAge))
        inputError= true;
    else
        inputError= false;

    if((userAge <= CHILD_AGE) || (userAge >= OLD_AGE))
        cost = "for free";
    else if(userAge < YOUTH_AGE)
        cost = "with a half price ticket";
    else
        cost = "with a full price ticket";

    if(inputError)
        alert('Naughty user- please try again and enter your actual age:');
    else
        alert('You may travel ' + String(cost) + '.'); //assigns ticket price
  }
