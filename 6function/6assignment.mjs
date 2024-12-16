
// Percentage
// Percentage >= 80 return  Grade B
// Percentage >= 70 return  Grade C
// Percentage >= 60 return  Grade D
// Percentage >= 40 return  Grade E
// Percentage >= 100  return Grade A
const percentage = (num) => {
    if (typeof num !== 'number' || num < 40 ) {
        console.log("error")
        return;
    }
    else if (num >= 80 ) {
        return "Grade B"
    }
    else if (num >= 70 ) {
        return "Grade c"
    }
    else if (num >= 60 ) {
        return "Grade d"
    }
    else if (num >= 40 ) {
        return "Grade e"
    }
    else if (num >= 100 ) {
        return "Grade a"
    }
}
console.log(percentage(44))