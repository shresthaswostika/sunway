// / make a arrow function that takes number as input and
// if age [1 to 12],  return  since your age is ${age} your ticket is free
// if age[13 to 60], return since your age is ${age} your ticket cost 80
// if age[61 to 80 ], return since your age is ${age} your ticket cost 100
// if age[>80], return since your age is ${age} your ticket cost 40
let ageForTicket = (age) => {
    if (typeof age !== 'number' || age <= 0){
        console.log("please input number as an age")
        return;
    }
    else if (age >= 1 && age<= 12){
        console.log(`since your age is ${age} your ticket is free`)
        return;
    }
    else if (age >= 13 && age<= 60){
        console.log(`since your age is ${age} your ticket cost 80`)
        return;
    }
    else if (age >= 61 && age<= 80){
        console.log(`since your age is ${age} your ticket cost 100`)
        return;
    }
    else  if (age >= 80 ){
        console.log(`since your age is ${age} your ticket cost 40`)
        return;
    }
}
ageForTicket(77)