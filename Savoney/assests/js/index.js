let totalEx = 0;
let totalIn = 0;
let totalBa = 0;

let newExpense = document.getElementById("Expense");
let newIncome  = document.getElementById("income");

let Tex = document.getElementById("Tex");
let Tin = document.getElementById("Tin");


function Icalc(event){

    event.preventDefault()

  if(Number(newIncome.value) > 0){

        totalIn = totalIn + Number(newIncome.value);
        console.log(newIncome.value);
        Tin.innerHTML = totalIn
    }
    else{
        alert("Invalid Amount");
    }
     totalBa = totalIn - totalEx;
     document.getElementById("Tba").innerHTML = totalBa

     newIncome.value = "";

}


function Ecalc(event){

    event.preventDefault()
    if(Number(newExpense.value) > 0){

        totalEx = totalEx + Number(newExpense.value);
        console.log(newExpense.value);
        Tex.innerHTML = totalEx;
    }
    else{
        alert("Invalid Amount");
    }
     totalBa = totalIn - totalEx;
     document.getElementById("Tba").innerHTML = totalBa;

     newExpense.value = "";

}