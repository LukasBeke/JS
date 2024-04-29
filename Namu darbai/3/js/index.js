// 3 uzduotis
// Parašykite JavaScript programą, kuri patikrina, ar duotas skaičius egzistuoja diapazone nuo 40 iki 10000. Pavyzdžiui, 40 egzistuoja tarp 40 ir 4000.

function between(number){
    if(number >= 40 && number <= 10000)
        return(number + ' egzistuoja tarp 40 ir 10000')
    else
        return ('Skaicius nera diapazone')
}

//Pvz
console.log(between(23));
console.log(between(40));
console.log(between(9988));
console.log(between(10034));