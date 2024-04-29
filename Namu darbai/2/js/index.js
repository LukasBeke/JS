function grade(points, exam){
    if(points >= 89 && points <= 100){          //Ar taskai yra tarp 89-100
        if(exam === true && points >= 90){      //Ar egzaminas baigiamasis, ar taskai >90
            return true;
        } else if (exam !== true ){
            return true;
        }
    }
    return false;
}

//Bandymas

console.log(grade(95,false));
console.log(grade(90,true));
console.log(grade(88,false))