function lessThan100(num1, num2){

    let sumNum = num1+num2;

    if(sumNum > 100 ){
        return false;
    }
    else{
        return true;
    }

}

console.log(lessThan100(22, 15));
console.log(lessThan100(83, 34));
console.log(lessThan100(3, 77));